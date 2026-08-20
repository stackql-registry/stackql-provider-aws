--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - bedrock_agentcore_control
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agentcore_control.datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dataset"
    values={[
        { label: 'get_dataset', value: 'get_dataset' },
        { label: 'list_datasets', value: 'list_datasets' }
    ]}
>
<TabItem value="get_dataset">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:dataset/&#91;a-zA-Z0-9_-&#93;&#123;1,110&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the dataset. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,110&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_version" /></td>
    <td><code>string</code></td>
    <td>Dataset version identifier. Accepts "DRAFT" or a non-negative integer string representing a published version number. (pattern: &lt;code&gt;(DRAFT|&#91;0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="download_url" /></td>
    <td><code>string</code></td>
    <td>Presigned Amazon S3 URL to download the consolidated dataset file for the resolved version. Expires after 5 minutes. Omitted if the file does not yet exist.</td>
</tr>
<tr>
    <td><CopyableCode code="download_url_expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiry timestamp for the download URL.</td>
</tr>
<tr>
    <td><CopyableCode code="draft_status" /></td>
    <td><code>string</code></td>
    <td>Publish synchronization state. Only authoritative when status is ACTIVE. MODIFIED indicates DRAFT has unpublished changes. UNMODIFIED indicates DRAFT matches the latest published version. (MODIFIED, UNMODIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="example_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of examples in the DRAFT.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>Populated when status is CREATE_FAILED, UPDATE_FAILED, or DELETE_FAILED. Describes the reason for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>KMS key ARN used for server-side encryption on service Amazon S3 writes, if configured. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schema_type" /></td>
    <td><code>string</code></td>
    <td>Versioned schema type for dataset examples. Each value identifies both the source format and the version of that format's schema. (AGENTCORE_EVALUATION_PREDEFINED_V1, AGENTCORE_EVALUATION_SIMULATED_V1, GENERIC_EVALUATION_PREDEFINED_V1)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the dataset. (CREATING, UPDATING, DELETING, ACTIVE, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the dataset was last updated.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the dataset was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the dataset. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:bedrock-agentcore:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:dataset/&#91;a-zA-Z0-9_-&#93;&#123;1,110&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the dataset. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,110&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dataset_name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;a-zA-Z0-9_&#93;&#123;0,47&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="draft_status" /></td>
    <td><code>string</code></td>
    <td>Publish synchronization state. Only authoritative when status is ACTIVE. (MODIFIED, UNMODIFIED)</td>
</tr>
<tr>
    <td><CopyableCode code="example_count" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of examples in the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="schema_type" /></td>
    <td><code>string</code></td>
    <td>Versioned schema type for dataset examples. Each value identifies both the source format and the version of that format's schema. (AGENTCORE_EVALUATION_PREDEFINED_V1, AGENTCORE_EVALUATION_SIMULATED_V1, GENERIC_EVALUATION_PREDEFINED_V1)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the dataset. (CREATING, UPDATING, DELETING, ACTIVE, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the dataset was last updated.</td>
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
    <td><a href="#get_dataset"><CopyableCode code="get_dataset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-datasetVersion"><code>datasetVersion</code></a></td>
    <td>Retrieves dataset metadata. Use the datasetVersion query parameter to retrieve a specific version's metadata. If absent, defaults to DRAFT. For paginated example content, use ListDatasetExamples.</td>
</tr>
<tr>
    <td><a href="#list_datasets"><CopyableCode code="list_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all datasets in the caller's account, paginated.</td>
</tr>
<tr>
    <td><a href="#create_dataset"><CopyableCode code="create_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-datasetName"><code>datasetName</code></a>, <a href="#parameter-source"><code>source</code></a>, <a href="#parameter-schemaType"><code>schemaType</code></a></td>
    <td></td>
    <td>Creates a new dataset resource asynchronously. Returns immediately with status CREATING. Poll GetDataset until status transitions to ACTIVE or CREATE_FAILED.</td>
</tr>
<tr>
    <td><a href="#update_dataset"><CopyableCode code="update_dataset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a dataset's metadata. Synchronous operation. Only provided fields are updated; omitted fields remain unchanged. To modify dataset content, use AddDatasetExamples, UpdateDatasetExamples, or DeleteDatasetExamples.</td>
</tr>
<tr>
    <td><a href="#delete_dataset"><CopyableCode code="delete_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-datasetVersion"><code>datasetVersion</code></a></td>
    <td>Deletes a dataset version or an entire dataset asynchronously. If datasetVersion is absent, deletes all versions and the dataset record itself. If provided, deletes only that specific version.</td>
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
    <td>The unique identifier of the dataset to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-datasetVersion">
    <td><CopyableCode code="datasetVersion" /></td>
    <td><code>string</code></td>
    <td>Optional version to delete. If absent, deletes the entire dataset. If provided, deletes only that specific version.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of datasets to return per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dataset"
    values={[
        { label: 'get_dataset', value: 'get_dataset' },
        { label: 'list_datasets', value: 'list_datasets' }
    ]}
>
<TabItem value="get_dataset">

Retrieves dataset metadata. Use the datasetVersion query parameter to retrieve a specific version's metadata. If absent, defaults to DRAFT. For paginated example content, use ListDatasetExamples.

```sql
SELECT
created_at,
dataset_arn,
dataset_id,
dataset_name,
dataset_version,
description,
download_url,
download_url_expires_at,
draft_status,
example_count,
failure_reason,
kms_key_arn,
schema_type,
status,
tags,
updated_at
FROM aws.bedrock_agentcore_control.datasets
WHERE dataset_id = '{{ dataset_id }}' -- required
AND region = '{{ region }}' -- required
AND datasetVersion = '{{ datasetVersion }}'
;
```
</TabItem>
<TabItem value="list_datasets">

Lists all datasets in the caller's account, paginated.

```sql
SELECT
created_at,
dataset_arn,
dataset_id,
dataset_name,
description,
draft_status,
example_count,
schema_type,
status,
updated_at
FROM aws.bedrock_agentcore_control.datasets
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

Creates a new dataset resource asynchronously. Returns immediately with status CREATING. Poll GetDataset until status transitions to ACTIVE or CREATE_FAILED.

```sql
INSERT INTO aws.bedrock_agentcore_control.datasets (
clientToken,
datasetName,
description,
source,
schemaType,
kmsKeyArn,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ datasetName }}' /* required */,
'{{ description }}',
'{{ source }}' /* required */,
'{{ schemaType }}' /* required */,
'{{ kmsKeyArn }}',
'{{ tags }}',
'{{ region }}'
RETURNING
created_at,
dataset_arn,
dataset_id,
status
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
    - name: clientToken
      value: "{{ clientToken }}"
    - name: datasetName
      value: "{{ datasetName }}"
    - name: description
      value: "{{ description }}"
    - name: source
      description: |
        Source of examples to add to the dataset.
      value:
        inlineExamples:
          examples: "{{ examples }}"
        s3Source:
          s3Uri: "{{ s3Uri }}"
    - name: schemaType
      value: "{{ schemaType }}"
      description: |
        Versioned schema type for dataset examples. Each value identifies both the source format and the version of that format's schema.
      valid_values: ['AGENTCORE_EVALUATION_PREDEFINED_V1', 'AGENTCORE_EVALUATION_SIMULATED_V1', 'GENERIC_EVALUATION_PREDEFINED_V1']
    - name: kmsKeyArn
      value: "{{ kmsKeyArn }}"
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

Updates a dataset's metadata. Synchronous operation. Only provided fields are updated; omitted fields remain unchanged. To modify dataset content, use AddDatasetExamples, UpdateDatasetExamples, or DeleteDatasetExamples.

```sql
UPDATE aws.bedrock_agentcore_control.datasets
SET 
clientToken = '{{ clientToken }}',
description = '{{ description }}'
WHERE 
dataset_id = '{{ dataset_id }}' --required
AND region = '{{ region }}' --required
RETURNING
dataset_arn,
dataset_id,
updated_at;
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

Deletes a dataset version or an entire dataset asynchronously. If datasetVersion is absent, deletes all versions and the dataset record itself. If provided, deletes only that specific version.

```sql
DELETE FROM aws.bedrock_agentcore_control.datasets
WHERE dataset_id = '{{ dataset_id }}' --required
AND region = '{{ region }}' --required
AND datasetVersion = '{{ datasetVersion }}'
;
```
</TabItem>
</Tabs>
