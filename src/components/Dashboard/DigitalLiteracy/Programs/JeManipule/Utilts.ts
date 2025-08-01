import { FileItem } from "@/lib/types";


export function findItemByIdPath(items: FileItem[], path: string[]): FileItem | null {
  let current: FileItem | null = null;
  let list = items;
  for (const id of path) {
    current = list.find(item => item.id === id) || null;
    if (!current) return null;
    list = current.children;
  }
  return current;
}

export function removeItemByIdPath(items: FileItem[], path: string[]): FileItem[] {
  if (path.length === 0) return items;
  const cloned = structuredClone(items);
  let parent = cloned;
  for (let i = 0; i < path.length - 1; i++) {
    const found = parent.find(item => item.id === path[i]);
    if (!found) return items;
    parent = found.children;
  }
  const targetId = path[path.length - 1];
  const idx = parent.findIndex(item => item.id === targetId);
  if (idx !== -1) parent.splice(idx, 1);
  return cloned;
}

export function moveFileByIdPath(files: FileItem[], dragPath: string[], dropPath: string[]): FileItem[] {
  if (JSON.stringify(dragPath) === JSON.stringify(dropPath)) return files;
  if (dropPath.length > 0 && dragPath.length > 0) {
    const dropPathStr = JSON.stringify(dropPath);
    const dragPathStr = JSON.stringify(dragPath.slice(0, dropPath.length));
    if (dropPathStr === dragPathStr) return files;
  }
  const dragged = findItemByIdPath(files, dragPath);
  if (!dragged) return files;
  const cloned = removeItemByIdPath(files, dragPath);
  if (dropPath.length === 0) return [...cloned, dragged];
  const dropTarget = findItemByIdPath(cloned, dropPath);
  if (!dropTarget || !dropTarget.isFolder) return [...cloned, dragged];
  dropTarget.children.push(dragged);
  return cloned;
}

export function filterFiles(
  fileList: FileItem[],
  nameFilter: string,
  tagFilter: string,
  dateFilter: Date | null
): FileItem[] {
  return fileList.reduce<FileItem[]>((acc, file) => {
    const matchesName = !nameFilter || file.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesTag = !tagFilter || file.tags.some(tag => tag.toLowerCase().includes(tagFilter.toLowerCase()));
    const matchesDate = !dateFilter || file.date === dateFilter.toLocaleDateString();
    
    const matchesFilters = matchesName && matchesTag && matchesDate;
    
    if (file.isFolder) {
      if (matchesFilters) {
        acc.push({
          ...file,
          children: filterFiles(file.children, '', '', null)
        });
      } else {
        const filteredChildren = filterFiles(file.children, nameFilter, tagFilter, dateFilter);
        acc.push(...filteredChildren);
      }
    } else if (matchesFilters) {
      acc.push(file);
    }
    
    return acc;
  }, []);
}