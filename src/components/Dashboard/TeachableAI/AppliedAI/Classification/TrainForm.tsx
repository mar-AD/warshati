import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Button, Chip, Input, Link, Select, SelectItem, Slider, Tooltip } from '@nextui-org/react';
import { toast } from 'react-toastify';
import { HiOutlineDownload } from "react-icons/hi";
import { useTranslations } from 'next-intl';
import { TrainFormProps } from '../types';
import { BATCH_SIZE, EPOCHS_SIZE, LEARNING_RATE, MAX_EPOCHS, TRAIN_SPLIT_SIZE } from '../config/constants';
import { batch_sizes } from '../constants';

const TrainForm: React.FC<TrainFormProps> = ({ onTrainingSuccess, ...props }) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isTraining, setIsTraining] = useState(false);
  const [trainSplit, setTrainSplit] = useState<number>(TRAIN_SPLIT_SIZE);
  const [epochs, setEpochs] = useState<number>(EPOCHS_SIZE);
  const [batchSize, setBatchSize] = useState<number>(BATCH_SIZE);
  const [learningRate, setLearningRate] = useState<number>(LEARNING_RATE);
  const [isTrainingDone, setIsTrainingDone] = useState(false);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const t = useTranslations("appliedAI.train_form");

  // Refs to store the latest state values
  const epochsRef = useRef(epochs);
  const batchSizeRef = useRef(batchSize);
  const learningRateRef = useRef(learningRate);
  const trainSplitRef = useRef(trainSplit);

  // Update refs whenever state changes
  useEffect(() => {
    epochsRef.current = epochs;
  }, [epochs]);

  useEffect(() => {
    batchSizeRef.current = batchSize;
  }, [batchSize]);

  useEffect(() => {
    learningRateRef.current = learningRate;
  }, [learningRate]);

  useEffect(() => {
    trainSplitRef.current = trainSplit;
  }, [trainSplit]);

  useEffect(() => {
    const _accuracy = localStorage.getItem("accuracy");
    if (_accuracy) {
      setAccuracy(parseFloat(_accuracy))
      setIsTrainingDone(true);
    }
  }, [accuracy, isTrainingDone])

  const initializeWebSocket = useCallback(() => {
    const wsBase = process.env.NEXT_PUBLIC_WS_BASE || 'ws://localhost:8000/ws';
    const sessionId = localStorage.getItem("sessionId");

    if (!sessionId) {
      toast.error('Session ID not found');
      return null;
    }

    const ws = new WebSocket(`${wsBase}/image/train/${sessionId}`);

    ws.onopen = () => {
      console.log('WebSocket is open now.');
      startTraining(ws);  // Start training once the socket is open
    };

    ws.onmessage = (event) => handleWebSocketMessage(event);

    ws.onclose = () => {
      console.log('WebSocket is closed now.');
      if (isTraining)
        toast.error(t("train_end_err_message"));
      setIsTraining(false);
      setSocket(null);
    };

    ws.onerror = (error) => {
      console.error('WebSocket error observed:', error);
      closeWebSocket(ws);
    };

    setSocket(ws);
    return ws;
  }, []);

  const handleWebSocketMessage = useCallback((event: MessageEvent) => {
    const data = JSON.parse(event.data);

    if (data.status === "success") {
      setIsTraining(false);
      setIsTrainingDone(true);
      const accuracy = data.info?.accuracy;
      setAccuracy(accuracy);
      localStorage.setItem("isClassificationTrainingDone", "true");
      localStorage.setItem("accuracy", accuracy.toString());
      toast.success(t("train_end_succ_message"));
      onTrainingSuccess();
    } else {
      toast.error(t("train_end_err_message"));
      setIsTraining(false);
    }

    closeWebSocket(socket);  // Close the socket after receiving a message
  }, [onTrainingSuccess, socket]);

  const closeWebSocket = (ws: WebSocket | null) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.close();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateInputs()) {
      initializeWebSocket();
    }
  };

  const validateInputs = (): boolean => {
    // Add validation logic here if needed
    return true;
  };

  const startTraining = (ws: WebSocket | null) => {
    if (ws?.readyState === WebSocket.OPEN) {
      const trainingData = {
        epochs: epochsRef.current,
        learning_rate: learningRateRef.current,
        batch_size: batchSizeRef.current,
        val_split: parseFloat((1 - trainSplitRef.current).toFixed(2)),
      };

      ws.send(JSON.stringify(trainingData));
      setIsTraining(true);
      toast.info(t("train_start_message"), { autoClose: 1500 });
    }
  };

  return (
    <form {...props} onSubmit={handleSubmit}>
      <Slider
        label={t("train_split")}
        size="sm"
        step={0.01}
        maxValue={0.9}
        minValue={0.5}
        color="primary"
        className="w-full"
        value={trainSplit}
        onChange={(value) => setTrainSplit(value as number)}
        renderValue={({ ...props }) => (
          <output {...props}>
            <Tooltip content={t("press_enter_confirm")} placement="left">
              <input
                className="px-1 py-0.5 w-12 text-right text-small bg-default-100 border-transparent hover:border-primary focus:border-primary"
                type="text"
                aria-label="Train split value"
                value={trainSplit.toString()}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = parseFloat(e.target.value);
                  if (!isNaN(value)) setTrainSplit(value);
                }}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === "Enter" && !isNaN(Number(trainSplit))) {
                    setTrainSplit(Number(trainSplit));
                  }
                }}
              />
            </Tooltip>
          </output>
        )}
      />

      <Input
        type="number"
        label={t("epochs")}
        placeholder="0.00"
        labelPlacement="outside"
        max={MAX_EPOCHS}
        min={5}
        value={epochs.toString()}
        onChange={(e) => setEpochs(parseInt(e.target.value))}
        required
      />

      <Select
        labelPlacement="outside"
        label={t("batch_size")}
        placeholder={t("Select_batch_size")}
        size="md"
        value={batchSize.toString()}
        onChange={(e) => setBatchSize(parseInt(e.target.value))}
        required
        defaultSelectedKeys={[batchSize.toString()]}
      >
        {batch_sizes.map((item) => (
          <SelectItem key={item.key} value={item.key}>
            {item.label}
          </SelectItem>
        ))}
      </Select>

      <Input
        type="number"
        label={t("learning_rate")}
        placeholder="0.00"
        labelPlacement="outside"
        max={1}
        step={0.001}
        min={0.001}
        maxLength={5}
        value={learningRate.toString()}
        onChange={(e) => setLearningRate(parseFloat(e.target.value))}
        required
      />


      <Button color='primary' type="submit" isLoading={isTraining}>
        {isTraining ? t("training") : t("start_training")}
      </Button>

      {isTrainingDone && (
        <Button
          color="success"
          as={Link}
          endContent={<HiOutlineDownload />}
          variant='ghost'
          href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/image/export/${localStorage.getItem("sessionId")}`}
        >
          {
            t("export_model")
          }
        </Button>
      )}

      {isTrainingDone && accuracy !== null && (
        <div>
          {
            t("accuracy")
          }
          <Chip
            color={accuracy >= 0.85 ? "success" : accuracy >= 0.7 ? "warning" : "danger"}
            className='ml-3'
            variant="dot"
          >
            {Math.round(accuracy * 100)}%
          </Chip>
        </div>
      )
      }
    </form >
  );
};

export default TrainForm;
