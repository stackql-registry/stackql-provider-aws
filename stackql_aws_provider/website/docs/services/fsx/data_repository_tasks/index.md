--- 
title: data_repository_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - data_repository_tasks
  - fsx
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>data_repository_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_repository_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.fsx.data_repository_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_data_repository_tasks"
    values={[
        { label: 'describe_data_repository_tasks', value: 'describe_data_repository_tasks' }
    ]}
>
<TabItem value="describe_data_repository_tasks">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="data_repository_tasks" /></td>
    <td><code>array</code></td>
    <td>The collection of data repository task descriptions returned.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>(Optional) Opaque pagination token returned from a previous operation (String). If present, this token indicates from what point you can continue processing the request, where the previous NextToken value left off. (pattern: &lt;code&gt;^(?:&#91;A-Za-z0-9+\/&#93;&#123;4&#125;)*(?:&#91;A-Za-z0-9+\/&#93;&#123;2&#125;==|&#91;A-Za-z0-9+\/&#93;&#123;3&#125;=)?$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_data_repository_tasks"><CopyableCode code="describe_data_repository_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if one or more TaskIds values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems or caches, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all tasks, you can paginate the response by using the optional MaxResults parameter to limit the number of tasks returned in a response. If more tasks remain, a NextToken value is returned in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.</td>
</tr>
<tr>
    <td><a href="#create_data_repository_task"><CopyableCode code="create_data_repository_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Type"><code>Type</code></a>, <a href="#parameter-FileSystemId"><code>FileSystemId</code></a>, <a href="#parameter-Report"><code>Report</code></a></td>
    <td></td>
    <td>Creates an Amazon FSx for Lustre data repository task. A CreateDataRepositoryTask operation will fail if a data repository is not linked to the FSx file system. You use import and export data repository tasks to perform bulk operations between your FSx for Lustre file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. You use release data repository tasks to release data from your file system for files that are exported to S3. The metadata of released files remains on the file system so users or applications can still access released files by reading the files again, which will restore data from Amazon S3 to the FSx for Lustre file system. To learn more about data repository tasks, see Data Repository Tasks. To learn more about linking a data repository to your file system, see Linking your file system to an S3 bucket.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_data_repository_tasks"
    values={[
        { label: 'describe_data_repository_tasks', value: 'describe_data_repository_tasks' }
    ]}
>
<TabItem value="describe_data_repository_tasks">

Returns the description of specific Amazon FSx for Lustre or Amazon File Cache data repository tasks, if one or more TaskIds values are provided in the request, or if filters are used in the request. You can use filters to narrow the response to include just tasks for specific file systems or caches, or tasks in a specific lifecycle state. Otherwise, it returns all data repository tasks owned by your Amazon Web Services account in the Amazon Web Services Region of the endpoint that you're calling. When retrieving all tasks, you can paginate the response by using the optional MaxResults parameter to limit the number of tasks returned in a response. If more tasks remain, a NextToken value is returned in the response. In this case, send a later request with the NextToken request parameter set to the value of NextToken from the last response.

```sql
SELECT
data_repository_tasks,
next_token
FROM aws.fsx.data_repository_tasks
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_repository_task"
    values={[
        { label: 'create_data_repository_task', value: 'create_data_repository_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_repository_task">

Creates an Amazon FSx for Lustre data repository task. A CreateDataRepositoryTask operation will fail if a data repository is not linked to the FSx file system. You use import and export data repository tasks to perform bulk operations between your FSx for Lustre file system and its linked data repositories. An example of a data repository task is exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to a linked data repository. You use release data repository tasks to release data from your file system for files that are exported to S3. The metadata of released files remains on the file system so users or applications can still access released files by reading the files again, which will restore data from Amazon S3 to the FSx for Lustre file system. To learn more about data repository tasks, see Data Repository Tasks. To learn more about linking a data repository to your file system, see Linking your file system to an S3 bucket.

```sql
INSERT INTO aws.fsx.data_repository_tasks (
Type,
Paths,
FileSystemId,
Report,
ClientRequestToken,
Tags,
CapacityToRelease,
ReleaseConfiguration,
region
)
SELECT 
'{{ Type }}' /* required */,
'{{ Paths }}',
'{{ FileSystemId }}' /* required */,
'{{ Report }}' /* required */,
'{{ ClientRequestToken }}',
'{{ Tags }}',
{{ CapacityToRelease }},
'{{ ReleaseConfiguration }}',
'{{ region }}'
RETURNING
data_repository_task
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_repository_tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_repository_tasks resource.
    - name: Type
      value: "{{ Type }}"
      description: |
        Specifies the type of data repository task to create. EXPORT_TO_REPOSITORY tasks export from your Amazon FSx for Lustre file system to a linked data repository. IMPORT_METADATA_FROM_REPOSITORY tasks import metadata changes from a linked S3 bucket to your Amazon FSx for Lustre file system. RELEASE_DATA_FROM_FILESYSTEM tasks release files in your Amazon FSx for Lustre file system that have been exported to a linked S3 bucket and that meet your specified release criteria. AUTO_RELEASE_DATA tasks automatically release files from an Amazon File Cache resource.
      valid_values: ['EXPORT_TO_REPOSITORY', 'IMPORT_METADATA_FROM_REPOSITORY', 'RELEASE_DATA_FROM_FILESYSTEM', 'AUTO_RELEASE_DATA']
    - name: Paths
      value:
        - "{{ Paths }}"
      description: |
        A list of paths for the data repository task to use when the task is processed. If a path that you provide isn't valid, the task fails. If you don't provide paths, the default behavior is to export all files to S3 (for export tasks), import all files from S3 (for import tasks), or release all exported files that meet the last accessed time criteria (for release tasks). For export tasks, the list contains paths on the FSx for Lustre file system from which the files are exported to the Amazon S3 bucket. The default path is the file system root directory. The paths you provide need to be relative to the mount point of the file system. If the mount point is /mnt/fsx and /mnt/fsx/path1 is a directory or file on the file system you want to export, then the path to provide is path1. For import tasks, the list contains paths in the Amazon S3 bucket from which POSIX metadata changes are imported to the FSx for Lustre file system. The path can be an S3 bucket or prefix in the format s3://bucket-name/prefix (where prefix is optional). For release tasks, the list contains directory or file paths on the FSx for Lustre file system from which to release exported files. If a directory is specified, files within the directory are released. If a file path is specified, only that file is released. To release all exported files in the file system, specify a forward slash (/) as the path. A file must also meet the last accessed time criteria specified in for the file to be released.
    - name: FileSystemId
      value: "{{ FileSystemId }}"
      description: |
        The globally unique ID of the file system, assigned by Amazon FSx.
    - name: Report
      description: |
        Defines whether or not Amazon FSx provides a CompletionReport once the task has completed. A CompletionReport provides a detailed report on the files that Amazon FSx processed that meet the criteria specified by the Scope parameter. For more information, see Working with Task Completion Reports.
      value:
        Enabled: {{ Enabled }}
        Path: "{{ Path }}"
        Format: "{{ Format }}"
        Scope: "{{ Scope }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        (Optional) An idempotency token for resource creation, in a string of up to 63 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
    - name: Tags
      description: |
        A list of Tag values, with a maximum of 50 elements.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: CapacityToRelease
      value: {{ CapacityToRelease }}
      description: |
        Specifies the amount of data to release, in GiB, by an Amazon File Cache AUTO_RELEASE_DATA task that automatically releases files from the cache.
    - name: ReleaseConfiguration
      description: |
        The configuration that specifies the last accessed time criteria for files that will be released from an Amazon FSx for Lustre file system.
      value:
        DurationSinceLastAccess:
          Unit: "{{ Unit }}"
          Value: {{ Value }}
`}</CodeBlock>

</TabItem>
</Tabs>
