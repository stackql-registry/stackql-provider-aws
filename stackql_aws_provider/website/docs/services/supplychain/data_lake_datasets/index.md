--- 
title: data_lake_datasets
hide_title: false
hide_table_of_contents: false
keywords:
  - data_lake_datasets
  - supplychain
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

Creates, updates, deletes, gets or lists a <code>data_lake_datasets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_lake_datasets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.supplychain.data_lake_datasets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_lake_dataset"
    values={[
        { label: 'get_data_lake_dataset', value: 'get_data_lake_dataset' },
        { label: 'list_data_lake_datasets', value: 'list_data_lake_datasets' }
    ]}
>
<TabItem value="get_data_lake_dataset">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. For asc namespace, the name must be one of the supported data entities under https:​//docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html. (pattern: &lt;code&gt;&#91;a-z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The arn of the dataset. (pattern: &lt;code&gt;arn:aws:scn(?::(&#91;a-z0-9-&#93;+):(&#91;0-9&#93;+):instance)?/(&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#91;-_./A-Za-z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Supply Chain instance identifier. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces: asc - For information on the Amazon Web Services Supply Chain supported datasets see https:​//docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html. default - For datasets with custom user-defined schemas. (pattern: &lt;code&gt;&#91;a-z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="partitionSpec" /></td>
    <td><code>object</code></td>
    <td>The partition specification for a dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>The schema details of the dataset. Note that for AWS Supply Chain dataset under asc namespace, it may have internal fields like connection_id that will be auto populated by data ingestion methods.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_lake_datasets">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. For asc namespace, the name must be one of the supported data entities under https:​//docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html. (pattern: &lt;code&gt;&#91;a-z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The arn of the dataset. (pattern: &lt;code&gt;arn:aws:scn(?::(&#91;a-z0-9-&#93;+):(&#91;0-9&#93;+):instance)?/(&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;)&#91;-_./A-Za-z0-9&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation time of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Supply Chain instance identifier. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last modified time of the dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces: asc - For information on the Amazon Web Services Supply Chain supported datasets see https:​//docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html. default - For datasets with custom user-defined schemas. (pattern: &lt;code&gt;&#91;a-z0-9_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="partitionSpec" /></td>
    <td><code>object</code></td>
    <td>The partition specification for a dataset.</td>
</tr>
<tr>
    <td><CopyableCode code="schema" /></td>
    <td><code>object</code></td>
    <td>The schema details of the dataset. Note that for AWS Supply Chain dataset under asc namespace, it may have internal fields like connection_id that will be auto populated by data ingestion methods.</td>
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
    <td><a href="#get_data_lake_dataset"><CopyableCode code="get_data_lake_dataset" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to programmatically view an Amazon Web Services Supply Chain data lake dataset. Developers can view the data lake dataset information such as namespace, schema, and so on for a given instance ID, namespace, and dataset name.</td>
</tr>
<tr>
    <td><a href="#list_data_lake_datasets"><CopyableCode code="list_data_lake_datasets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Enables you to programmatically view the list of Amazon Web Services Supply Chain data lake datasets. Developers can view the datasets and the corresponding information such as namespace, schema, and so on for a given instance ID and namespace.</td>
</tr>
<tr>
    <td><a href="#create_data_lake_dataset"><CopyableCode code="create_data_lake_dataset" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to programmatically create an Amazon Web Services Supply Chain data lake dataset. Developers can create the datasets using their pre-defined or custom schema for a given instance ID, namespace, and dataset name.</td>
</tr>
<tr>
    <td><a href="#update_data_lake_dataset"><CopyableCode code="update_data_lake_dataset" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to programmatically update an Amazon Web Services Supply Chain data lake dataset. Developers can update the description of a data lake dataset for a given instance ID, namespace, and dataset name.</td>
</tr>
<tr>
    <td><a href="#delete_data_lake_dataset"><CopyableCode code="delete_data_lake_dataset" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to programmatically delete an Amazon Web Services Supply Chain data lake dataset. Developers can delete the existing datasets for a given instance ID, namespace, and instance name.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The AWS Supply Chain instance identifier.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the dataset. For asc namespace, the name must be one of the supported data entities under https:​//docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace of the dataset, besides the custom defined namespace, every instance comes with below pre-defined namespaces: asc - For information on the Amazon Web Services Supply Chain supported datasets see https:​//docs.aws.amazon.com/aws-supply-chain/latest/userguide/data-model-asc.html. default - For datasets with custom user-defined schemas.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The max number of datasets to fetch in this paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to fetch next page of datasets.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_lake_dataset"
    values={[
        { label: 'get_data_lake_dataset', value: 'get_data_lake_dataset' },
        { label: 'list_data_lake_datasets', value: 'list_data_lake_datasets' }
    ]}
>
<TabItem value="get_data_lake_dataset">

Enables you to programmatically view an Amazon Web Services Supply Chain data lake dataset. Developers can view the data lake dataset information such as namespace, schema, and so on for a given instance ID, namespace, and dataset name.

```sql
SELECT
name,
arn,
createdTime,
description,
instanceId,
lastModifiedTime,
namespace,
partitionSpec,
schema
FROM aws.supplychain.data_lake_datasets
WHERE instance_id = '{{ instance_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_lake_datasets">

Enables you to programmatically view the list of Amazon Web Services Supply Chain data lake datasets. Developers can view the datasets and the corresponding information such as namespace, schema, and so on for a given instance ID and namespace.

```sql
SELECT
name,
arn,
createdTime,
description,
instanceId,
lastModifiedTime,
namespace,
partitionSpec,
schema
FROM aws.supplychain.data_lake_datasets
WHERE instance_id = '{{ instance_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_lake_dataset"
    values={[
        { label: 'create_data_lake_dataset', value: 'create_data_lake_dataset' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_lake_dataset">

Enables you to programmatically create an Amazon Web Services Supply Chain data lake dataset. Developers can create the datasets using their pre-defined or custom schema for a given instance ID, namespace, and dataset name.

```sql
INSERT INTO aws.supplychain.data_lake_datasets (
schema,
description,
partitionSpec,
tags,
instance_id,
namespace,
name,
region
)
SELECT 
'{{ schema }}',
'{{ description }}',
'{{ partitionSpec }}',
'{{ tags }}',
'{{ instance_id }}',
'{{ namespace }}',
'{{ name }}',
'{{ region }}'
RETURNING
dataset
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_lake_datasets
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the data_lake_datasets resource.
    - name: namespace
      value: "{{ namespace }}"
      description: Required parameter for the data_lake_datasets resource.
    - name: name
      value: "{{ name }}"
      description: Required parameter for the data_lake_datasets resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_lake_datasets resource.
    - name: schema
      description: |
        The schema details of the dataset. Note that for AWS Supply Chain dataset under asc namespace, it may have internal fields like connection_id that will be auto populated by data ingestion methods.
      value:
        name: "{{ name }}"
        fields:
          - name: "{{ name }}"
            type_: "{{ type_ }}"
            isRequired: {{ isRequired }}
        primaryKeys:
          - name: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: partitionSpec
      description: |
        The partition specification for a dataset.
      value:
        fields:
          - name: "{{ name }}"
            transform:
              type_: "{{ type_ }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_lake_dataset"
    values={[
        { label: 'update_data_lake_dataset', value: 'update_data_lake_dataset' }
    ]}
>
<TabItem value="update_data_lake_dataset">

Enables you to programmatically update an Amazon Web Services Supply Chain data lake dataset. Developers can update the description of a data lake dataset for a given instance ID, namespace, and dataset name.

```sql
UPDATE aws.supplychain.data_lake_datasets
SET 
description = '{{ description }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND namespace = '{{ namespace }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
dataset;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_lake_dataset"
    values={[
        { label: 'delete_data_lake_dataset', value: 'delete_data_lake_dataset' }
    ]}
>
<TabItem value="delete_data_lake_dataset">

Enables you to programmatically delete an Amazon Web Services Supply Chain data lake dataset. Developers can delete the existing datasets for a given instance ID, namespace, and instance name.

```sql
DELETE FROM aws.supplychain.data_lake_datasets
WHERE instance_id = '{{ instance_id }}' --required
AND namespace = '{{ namespace }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
