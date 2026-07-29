--- 
title: import_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - import_tasks
  - neptune_graph
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

Creates, updates, deletes, gets or lists an <code>import_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="import_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.neptune_graph.import_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_import_task"
    values={[
        { label: 'get_import_task', value: 'get_import_task' },
        { label: 'list_import_tasks', value: 'list_import_tasks' }
    ]}
>
<TabItem value="get_import_task">

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
    <td><CopyableCode code="attempt_number" /></td>
    <td><code>integer</code></td>
    <td>The number of the current attempts to execute the import task.</td>
</tr>
<tr>
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>Specifies the format of S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identifies the openCypher load format. (CSV, OPEN_CYPHER, PARQUET, NTRIPLES)</td>
</tr>
<tr>
    <td><CopyableCode code="graph_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Neptune Analytics graph. (pattern: &lt;code&gt;g-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="import_options" /></td>
    <td><code>object</code></td>
    <td>Contains options for controlling the import process. For example, if the failOnError key is set to false, the import skips problem data and attempts to continue (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered.</td>
</tr>
<tr>
    <td><CopyableCode code="import_task_details" /></td>
    <td><code>object</code></td>
    <td>Contains details about the specified import task.</td>
</tr>
<tr>
    <td><CopyableCode code="parquet_type" /></td>
    <td><code>string</code></td>
    <td>The parquet type of the import task. (COLUMNAR)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that will allow access to the data that is to be imported. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::\d&#123;12&#125;:(role|role/service-role)(/&#91;\w+=,.@-&#93;+)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the import task: INITIALIZING – The necessary resources needed to create the graph are being prepared. ANALYZING_DATA – The data is being analyzed to determine the optimal infrastructure configuration for the new graph. RE_PROVISIONING – The data did not fit into the provisioned graph, so it is being re-provisioned with more capacity. IMPORTING – The data is being loaded. ERROR_ENCOUNTERED – An error has been encountered while trying to create the graph and import the data. ERROR_ENCOUNTERED_ROLLING_BACK – Because of the error that was encountered, the graph is being rolled back and all its resources released. SUCCEEDED – Graph creation and data loading succeeded. FAILED – Graph creation or data loading failed. When the status is FAILED, you can use get-graphs to get more information about the state of the graph. CANCELLING – Because you cancelled the import task, cancellation is in progress. CANCELLED – You have successfully cancelled the import task. (INITIALIZING, EXPORTING, ANALYZING_DATA, IMPORTING, REPROVISIONING, ROLLING_BACK, SUCCEEDED, FAILED, CANCELLING, CANCELLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the import task has this status value.</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the import task. (pattern: &lt;code&gt;t-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_import_tasks">

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
    <td><CopyableCode code="format_" /></td>
    <td><code>string</code></td>
    <td>Specifies the format of S3 data to be imported. Valid values are CSV, which identifies the Gremlin CSV format or OPENCYPHER, which identies the openCypher load format. (CSV, OPEN_CYPHER, PARQUET, NTRIPLES)</td>
</tr>
<tr>
    <td><CopyableCode code="graph_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Neptune Analytics graph. (pattern: &lt;code&gt;g-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parquet_type" /></td>
    <td><code>string</code></td>
    <td>The parquet type of the import task. (COLUMNAR)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role that will allow access to the data that is to be imported. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::\d&#123;12&#125;:(role|role/service-role)(/&#91;\w+=,.@-&#93;+)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>A URL identifying to the location of the data to be imported. This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the import task. (INITIALIZING, EXPORTING, ANALYZING_DATA, IMPORTING, REPROVISIONING, ROLLING_BACK, SUCCEEDED, FAILED, CANCELLING, CANCELLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the import task. (pattern: &lt;code&gt;t-&#91;a-z0-9&#93;&#123;10&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_import_task"><CopyableCode code="get_import_task" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-task_identifier"><code>task_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a specified import task.</td>
</tr>
<tr>
    <td><a href="#list_import_tasks"><CopyableCode code="list_import_tasks" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists import tasks.</td>
</tr>
<tr>
    <td><a href="#create_graph_using_import_task"><CopyableCode code="create_graph_using_import_task" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-graphName"><code>graphName</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a></td>
    <td></td>
    <td>Creates a new Neptune Analytics graph and imports data into it, either from Amazon Simple Storage Service (S3) or from a Neptune database or a Neptune database snapshot. The data can be loaded from files in S3 that in either the Gremlin CSV format or the openCypher load format.</td>
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
<tr id="parameter-task_identifier">
    <td><CopyableCode code="task_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the import task.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The total number of records to return in the command's output. If the total number of records available is more than the value specified, nextToken is provided in the command's output. To resume pagination, provide the nextToken output value in the nextToken argument of a subsequent command. Do not use the nextToken response element directly outside of the Amazon CLI.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Pagination token used to paginate output. When this value is provided as input, the service returns results from where the previous response left off. When this value is present in output, it indicates that there are more results to retrieve.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_import_task"
    values={[
        { label: 'get_import_task', value: 'get_import_task' },
        { label: 'list_import_tasks', value: 'list_import_tasks' }
    ]}
>
<TabItem value="get_import_task">

Retrieves a specified import task.

```sql
SELECT
attempt_number,
format_,
graph_id,
import_options,
import_task_details,
parquet_type,
role_arn,
source,
status,
status_reason,
task_id
FROM aws.neptune_graph.import_tasks
WHERE task_identifier = '{{ task_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_import_tasks">

Lists import tasks.

```sql
SELECT
format_,
graph_id,
parquet_type,
role_arn,
source,
status,
task_id
FROM aws.neptune_graph.import_tasks
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_graph_using_import_task"
    values={[
        { label: 'create_graph_using_import_task', value: 'create_graph_using_import_task' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_graph_using_import_task">

Creates a new Neptune Analytics graph and imports data into it, either from Amazon Simple Storage Service (S3) or from a Neptune database or a Neptune database snapshot. The data can be loaded from files in S3 that in either the Gremlin CSV format or the openCypher load format.

```sql
INSERT INTO aws.neptune_graph.import_tasks (
graphName,
tags,
publicConnectivity,
kmsKeyIdentifier,
vectorSearchConfiguration,
replicaCount,
deletionProtection,
importOptions,
maxProvisionedMemory,
minProvisionedMemory,
failOnError,
source,
format,
parquetType,
blankNodeHandling,
roleArn,
region
)
SELECT 
'{{ graphName }}' /* required */,
'{{ tags }}',
{{ publicConnectivity }},
'{{ kmsKeyIdentifier }}',
'{{ vectorSearchConfiguration }}',
{{ replicaCount }},
{{ deletionProtection }},
'{{ importOptions }}',
{{ maxProvisionedMemory }},
{{ minProvisionedMemory }},
{{ failOnError }},
'{{ source }}' /* required */,
'{{ format }}',
'{{ parquetType }}',
'{{ blankNodeHandling }}',
'{{ roleArn }}' /* required */,
'{{ region }}'
RETURNING
format_,
graph_id,
import_options,
parquet_type,
role_arn,
source,
status,
task_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: import_tasks
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the import_tasks resource.
    - name: graphName
      value: "{{ graphName }}"
    - name: tags
      value: "{{ tags }}"
    - name: publicConnectivity
      value: {{ publicConnectivity }}
    - name: kmsKeyIdentifier
      value: "{{ kmsKeyIdentifier }}"
    - name: vectorSearchConfiguration
      description: |
        Specifies the number of dimensions for vector embeddings loaded into the graph. Max = 65535
      value:
        dimension: {{ dimension }}
    - name: replicaCount
      value: {{ replicaCount }}
    - name: deletionProtection
      value: {{ deletionProtection }}
    - name: importOptions
      description: |
        Options for how to perform an import.
      value:
        neptune:
          s3ExportPath: "{{ s3ExportPath }}"
          s3ExportKmsKeyId: "{{ s3ExportKmsKeyId }}"
          preserveDefaultVertexLabels: {{ preserveDefaultVertexLabels }}
          preserveEdgeIds: {{ preserveEdgeIds }}
    - name: maxProvisionedMemory
      value: {{ maxProvisionedMemory }}
    - name: minProvisionedMemory
      value: {{ minProvisionedMemory }}
    - name: failOnError
      value: {{ failOnError }}
    - name: source
      value: "{{ source }}"
    - name: format
      value: "{{ format }}"
      valid_values: ['CSV', 'OPEN_CYPHER', 'PARQUET', 'NTRIPLES']
    - name: parquetType
      value: "{{ parquetType }}"
      valid_values: ['COLUMNAR']
    - name: blankNodeHandling
      value: "{{ blankNodeHandling }}"
      valid_values: ['convertToIri']
    - name: roleArn
      value: "{{ roleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>
