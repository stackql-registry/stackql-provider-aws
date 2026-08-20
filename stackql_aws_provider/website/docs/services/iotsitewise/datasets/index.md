--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datasets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_datasets"
    values={[
        { label: 'list_datasets', value: 'list_datasets' },
        { label: 'describe_dataset', value: 'describe_dataset' }
    ]}
>
<TabItem value="list_datasets">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dataset. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9 _\-#$*!@.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dataset. The format is arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:dataset/$&#123;DatasetId&#125;. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The dataset creation date, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_type" /></td>
    <td><code>string</code></td>
    <td>The type of dataset: a session dataset, a curated dataset, or a connection to an external datasource. (SESSION, CURATED, EXTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description about the dataset, and its functionality. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enrichment_status" /></td>
    <td><code>object</code></td>
    <td>The enrichment status of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the dataset was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="source_type" /></td>
    <td><code>string</code></td>
    <td>The data source type of the dataset. (KENDRA, SITEWISE)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>object</code></td>
    <td>The status of the dataset. This contains the state and any error messages. The state is ACTIVE when ready to use.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_dataset">

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
    <td><CopyableCode code="dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the dataset. The format is arn:$&#123;Partition&#125;:iotsitewise:$&#123;Region&#125;:$&#123;Account&#125;:dataset/$&#123;DatasetId&#125;. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-zA-Z0-9-:\/_\.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_config" /></td>
    <td><code>object</code></td>
    <td>Contains the configuration for a dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The dataset creation date, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_description" /></td>
    <td><code>string</code></td>
    <td>A description about the dataset, and its functionality. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dataset. (pattern: &lt;code&gt;^(?!00000000-0000-0000-0000-000000000000)&#91;0-9a-f&#93;&#123;8&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;4&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the dataset was last updated, in Unix epoch time.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9 _\-#$*!@.&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_source" /></td>
    <td><code>object</code></td>
    <td>The data source for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_status" /></td>
    <td><code>object</code></td>
    <td>The status of the dataset. This contains the state and any error messages. State is CREATING after a successfull call to this API, and any associated error message. The state is ACTIVE when ready to use.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_type" /></td>
    <td><code>string</code></td>
    <td>The type of dataset: a session dataset, a curated dataset, or a connection to an external datasource. (SESSION, CURATED, EXTERNAL)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_version" /></td>
    <td><code>string</code></td>
    <td>The version of the dataset. (pattern: &lt;code&gt;^(0|(&#91;1-9&#93;&#123;1&#125;\d*))$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enrichment_status" /></td>
    <td><code>object</code></td>
    <td>The enrichment status of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata for the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="workspace_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace that contains the dataset. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#list_datasets"><CopyableCode code="list_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-sourceType"><code>sourceType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-workspaceName"><code>workspaceName</code></a>, <a href="#parameter-datasetType"><code>datasetType</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of datasets for a specific target resource.</td>
</tr>
<tr>
    <td><a href="#describe_dataset"><CopyableCode code="describe_dataset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-workspaceName"><code>workspaceName</code></a>, <a href="#parameter-datasetVersion"><code>datasetVersion</code></a></td>
    <td>Retrieves information about a dataset.</td>
</tr>
<tr>
    <td><a href="#create_dataset"><CopyableCode code="create_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-datasetName"><code>datasetName</code></a>, <a href="#parameter-datasetSource"><code>datasetSource</code></a></td>
    <td></td>
    <td>Creates a dataset. Session and curated datasets are created in a workspace. A session dataset contains data segments of time series data, and a curated dataset curates data segments selected from source session datasets. A dataset that connects to an external datasource is created outside of a workspace.</td>
</tr>
<tr>
    <td><a href="#update_dataset"><CopyableCode code="update_dataset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-datasetName"><code>datasetName</code></a>, <a href="#parameter-datasetSource"><code>datasetSource</code></a></td>
    <td></td>
    <td>Updates a dataset.</td>
</tr>
<tr>
    <td><a href="#delete_dataset"><CopyableCode code="delete_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-workspaceName"><code>workspaceName</code></a>, <a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a dataset. This can't be undone. Deleting a session dataset also deletes the underlying time series data in the session. You can't delete a session dataset while a curated dataset references its data segments. First delete the curated dataset or disassociate the data segments. Deleting a curated dataset doesn't delete the underlying data in the source session datasets.</td>
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
<tr id="parameter-dataset_id">
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the dataset.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-sourceType">
    <td><CopyableCode code="sourceType" /></td>
    <td><code>string</code></td>
    <td>The type of data source for the dataset.</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</td>
</tr>
<tr id="parameter-datasetType">
    <td><CopyableCode code="datasetType" /></td>
    <td><code>string</code></td>
    <td>The type of dataset to filter by: a session dataset, a curated dataset, or a connection to an external datasource.</td>
</tr>
<tr id="parameter-datasetVersion">
    <td><CopyableCode code="datasetVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the dataset.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or null if there are no additional results.</td>
</tr>
<tr id="parameter-workspaceName">
    <td><CopyableCode code="workspaceName" /></td>
    <td><code>string</code></td>
    <td>The name of the workspace that contains the dataset.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_datasets"
    values={[
        { label: 'list_datasets', value: 'list_datasets' },
        { label: 'describe_dataset', value: 'describe_dataset' }
    ]}
>
<TabItem value="list_datasets">

Retrieves a paginated list of datasets for a specific target resource.

```sql
SELECT
id,
name,
arn,
creation_date,
dataset_type,
description,
enrichment_status,
last_update_date,
source_type,
status
FROM aws.iotsitewise.datasets
WHERE sourceType = '{{ sourceType }}' -- required
AND region = '{{ region }}' -- required
AND workspaceName = '{{ workspaceName }}'
AND datasetType = '{{ datasetType }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="describe_dataset">

Retrieves information about a dataset.

```sql
SELECT
dataset_arn,
dataset_config,
dataset_creation_date,
dataset_description,
dataset_id,
dataset_last_update_date,
dataset_name,
dataset_source,
dataset_status,
dataset_type,
dataset_version,
enrichment_status,
metadata,
workspace_name
FROM aws.iotsitewise.datasets
WHERE dataset_id = '{{ dataset_id }}' -- required
AND region = '{{ region }}' -- required
AND workspaceName = '{{ workspaceName }}'
AND datasetVersion = '{{ datasetVersion }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dataset"
    values={[
        { label: 'create_dataset', value: 'create_dataset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dataset">

Creates a dataset. Session and curated datasets are created in a workspace. A session dataset contains data segments of time series data, and a curated dataset curates data segments selected from source session datasets. A dataset that connects to an external datasource is created outside of a workspace.

```sql
INSERT INTO aws.iotsitewise.datasets (
datasetId,
datasetName,
datasetDescription,
datasetType,
datasetConfig,
workspaceName,
metadata,
datasetSource,
clientToken,
tags,
region
)
SELECT 
'{{ datasetId }}',
'{{ datasetName }}' /* required */,
'{{ datasetDescription }}',
'{{ datasetType }}',
'{{ datasetConfig }}',
'{{ workspaceName }}',
'{{ metadata }}',
'{{ datasetSource }}' /* required */,
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
dataset_arn,
dataset_id,
dataset_status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: datasets
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the datasets resource.
    - name: datasetId
      value: "{{ datasetId }}"
    - name: datasetName
      value: "{{ datasetName }}"
    - name: datasetDescription
      value: "{{ datasetDescription }}"
    - name: datasetType
      value: "{{ datasetType }}"
      valid_values: ['SESSION', 'CURATED', 'EXTERNAL']
    - name: datasetConfig
      description: |
        Contains the configuration for a dataset.
      value:
        session:
          sessionStartTimestamp:
            timeInSeconds: {{ timeInSeconds }}
            offsetInNanos: {{ offsetInNanos }}
          sessionEndTimestamp:
            timeInSeconds: {{ timeInSeconds }}
            offsetInNanos: {{ offsetInNanos }}
    - name: workspaceName
      value: "{{ workspaceName }}"
    - name: metadata
      value: "{{ metadata }}"
    - name: datasetSource
      description: |
        The data source for the dataset.
      value:
        sourceType: "{{ sourceType }}"
        sourceFormat: "{{ sourceFormat }}"
        sourceDetail:
          kendra:
            knowledgeBaseArn: "{{ knowledgeBaseArn }}"
            roleArn: "{{ roleArn }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dataset"
    values={[
        { label: 'update_dataset', value: 'update_dataset' }
    ]}
>
<TabItem value="update_dataset">

Updates a dataset.

```sql
UPDATE aws.iotsitewise.datasets
SET 
workspaceName = '{{ workspaceName }}',
datasetName = '{{ datasetName }}',
datasetDescription = '{{ datasetDescription }}',
datasetConfig = '{{ datasetConfig }}',
metadata = '{{ metadata }}',
datasetSource = '{{ datasetSource }}',
clientToken = '{{ clientToken }}'
WHERE 
dataset_id = '{{ dataset_id }}' --required
AND region = '{{ region }}' --required
AND datasetName = '{{ datasetName }}' --required
AND datasetSource = '{{ datasetSource }}' --required
RETURNING
dataset_arn,
dataset_id,
dataset_status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dataset"
    values={[
        { label: 'delete_dataset', value: 'delete_dataset' }
    ]}
>
<TabItem value="delete_dataset">

Deletes a dataset. This can't be undone. Deleting a session dataset also deletes the underlying time series data in the session. You can't delete a session dataset while a curated dataset references its data segments. First delete the curated dataset or disassociate the data segments. Deleting a curated dataset doesn't delete the underlying data in the source session datasets.

```sql
DELETE FROM aws.iotsitewise.datasets
WHERE dataset_id = '{{ dataset_id }}' --required
AND region = '{{ region }}' --required
AND workspaceName = '{{ workspaceName }}'
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
