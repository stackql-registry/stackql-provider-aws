--- 
title: datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - datasets
  - finspace_data
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace_data.datasets" /></td></tr>
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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The unique resource identifier for a Dataset. (pattern: &lt;code&gt;^alias\/\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="datasetArn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the Dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetDescription" /></td>
    <td><code>string</code></td>
    <td>Description of a dataset (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetId" /></td>
    <td><code>string</code></td>
    <td>ID for a given Dataset</td>
</tr>
<tr>
    <td><CopyableCode code="datasetTitle" /></td>
    <td><code>string</code></td>
    <td>Title for a given Dataset (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Dataset Kind (TABULAR, NON_TABULAR)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="schemaDefinition" /></td>
    <td><code>object</code></td>
    <td>A union of schema types.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the Dataset creation. PENDING – Dataset is pending creation. FAILED – Dataset creation has failed. SUCCESS – Dataset creation has succeeded. RUNNING – Dataset creation is running. (PENDING, FAILED, SUCCESS, RUNNING)</td>
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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>The unique resource identifier for a Dataset. (pattern: &lt;code&gt;^alias\/\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="datasetArn" /></td>
    <td><code>string</code></td>
    <td>The ARN identifier of the Dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="datasetDescription" /></td>
    <td><code>string</code></td>
    <td>Description of a dataset (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="datasetId" /></td>
    <td><code>string</code></td>
    <td>ID for a given Dataset</td>
</tr>
<tr>
    <td><CopyableCode code="datasetTitle" /></td>
    <td><code>string</code></td>
    <td>Title for a given Dataset (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kind" /></td>
    <td><code>string</code></td>
    <td>Dataset Kind (TABULAR, NON_TABULAR)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>integer (int64)</code></td>
    <td>Milliseconds since UTC epoch</td>
</tr>
<tr>
    <td><CopyableCode code="ownerInfo" /></td>
    <td><code>object</code></td>
    <td>A structure for Dataset owner info.</td>
</tr>
<tr>
    <td><CopyableCode code="schemaDefinition" /></td>
    <td><code>object</code></td>
    <td>A union of schema types.</td>
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
    <td></td>
    <td>Returns information about a Dataset.</td>
</tr>
<tr>
    <td><a href="#list_datasets"><CopyableCode code="list_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists all of the active Datasets that a user has access to.</td>
</tr>
<tr>
    <td><a href="#create_dataset"><CopyableCode code="create_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-datasetTitle"><code>datasetTitle</code></a>, <a href="#parameter-kind"><code>kind</code></a>, <a href="#parameter-permissionGroupParams"><code>permissionGroupParams</code></a></td>
    <td></td>
    <td>Creates a new FinSpace Dataset.</td>
</tr>
<tr>
    <td><a href="#update_dataset"><CopyableCode code="update_dataset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-datasetTitle"><code>datasetTitle</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Updates a FinSpace Dataset.</td>
</tr>
<tr>
    <td><a href="#delete_dataset"><CopyableCode code="delete_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-clientToken"><code>clientToken</code></a></td>
    <td>Deletes a FinSpace Dataset.</td>
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
    <td>The unique identifier of the Dataset to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-clientToken">
    <td><CopyableCode code="clientToken" /></td>
    <td><code>string</code></td>
    <td>A token that ensures idempotency. This token expires in 10 minutes.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results per page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates where a results page should begin.</td>
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

Returns information about a Dataset.

```sql
SELECT
alias,
createTime,
datasetArn,
datasetDescription,
datasetId,
datasetTitle,
kind,
lastModifiedTime,
schemaDefinition,
status
FROM aws.finspace_data.datasets
WHERE dataset_id = '{{ dataset_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_datasets">

Lists all of the active Datasets that a user has access to.

```sql
SELECT
alias,
createTime,
datasetArn,
datasetDescription,
datasetId,
datasetTitle,
kind,
lastModifiedTime,
ownerInfo,
schemaDefinition
FROM aws.finspace_data.datasets
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

Creates a new FinSpace Dataset.

```sql
INSERT INTO aws.finspace_data.datasets (
clientToken,
datasetTitle,
kind,
datasetDescription,
ownerInfo,
permissionGroupParams,
alias,
schemaDefinition,
region
)
SELECT 
'{{ clientToken }}',
'{{ datasetTitle }}' /* required */,
'{{ kind }}' /* required */,
'{{ datasetDescription }}',
'{{ ownerInfo }}',
'{{ permissionGroupParams }}' /* required */,
'{{ alias }}',
'{{ schemaDefinition }}',
'{{ region }}'
RETURNING
datasetId
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
      description: |
        Idempotence Token for API operations
    - name: datasetTitle
      value: "{{ datasetTitle }}"
      description: |
        Title for a given Dataset
    - name: kind
      value: "{{ kind }}"
      description: |
        Dataset Kind
      valid_values: ['TABULAR', 'NON_TABULAR']
    - name: datasetDescription
      value: "{{ datasetDescription }}"
      description: |
        Description of a dataset
    - name: ownerInfo
      description: |
        A structure for Dataset owner info.
      value:
        name: "{{ name }}"
        phoneNumber: "{{ phoneNumber }}"
        email: "{{ email }}"
    - name: permissionGroupParams
      description: |
        Permission group parameters for Dataset permissions. Here is an example of how you could specify the PermissionGroupParams: { "permissionGroupId": "0r6fCRtSTUk4XPfXQe3M0g", "datasetPermissions": [ {"permission": "ViewDatasetDetails"}, {"permission": "AddDatasetData"}, {"permission": "EditDatasetMetadata"}, {"permission": "DeleteDataset"} ] }
      value:
        permissionGroupId: "{{ permissionGroupId }}"
        datasetPermissions:
          - permission: "{{ permission }}"
    - name: alias
      value: "{{ alias }}"
    - name: schemaDefinition
      description: |
        A union of schema types.
      value:
        tabularSchemaConfig:
          columns:
            - dataType: "{{ dataType }}"
              columnName: "{{ columnName }}"
              columnDescription: "{{ columnDescription }}"
          primaryKeyColumns:
            - "{{ primaryKeyColumns }}"
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

Updates a FinSpace Dataset.

```sql
UPDATE aws.finspace_data.datasets
SET 
clientToken = '{{ clientToken }}',
datasetTitle = '{{ datasetTitle }}',
kind = '{{ kind }}',
datasetDescription = '{{ datasetDescription }}',
alias = '{{ alias }}',
schemaDefinition = '{{ schemaDefinition }}'
WHERE 
dataset_id = '{{ dataset_id }}' --required
AND region = '{{ region }}' --required
AND datasetTitle = '{{ datasetTitle }}' --required
AND kind = '{{ kind }}' --required
RETURNING
datasetId;
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

Deletes a FinSpace Dataset.

```sql
DELETE FROM aws.finspace_data.datasets
WHERE dataset_id = '{{ dataset_id }}' --required
AND region = '{{ region }}' --required
AND clientToken = '{{ clientToken }}'
;
```
</TabItem>
</Tabs>
