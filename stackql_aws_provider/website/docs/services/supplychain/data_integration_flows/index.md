--- 
title: data_integration_flows
hide_title: false
hide_table_of_contents: false
keywords:
  - data_integration_flows
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

Creates, updates, deletes, gets or lists a <code>data_integration_flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_integration_flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.supplychain.data_integration_flows" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_integration_flow"
    values={[
        { label: 'get_data_integration_flow', value: 'get_data_integration_flow' },
        { label: 'list_data_integration_flows', value: 'list_data_integration_flows' }
    ]}
>
<TabItem value="get_data_integration_flow">

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
    <td>The DataIntegrationFlow name. (pattern: &lt;code&gt;&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The DataIntegrationFlow creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The DataIntegrationFlow instance ID. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The DataIntegrationFlow last modified timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>The DataIntegrationFlow source configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>The DataIntegrationFlow target parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="transformation" /></td>
    <td><code>object</code></td>
    <td>The DataIntegrationFlow transformation parameters.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_integration_flows">

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
    <td>The DataIntegrationFlow name. (pattern: &lt;code&gt;&#91;A-Za-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The DataIntegrationFlow creation timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The DataIntegrationFlow instance ID. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The DataIntegrationFlow last modified timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="sources" /></td>
    <td><code>array</code></td>
    <td>The DataIntegrationFlow source configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>The DataIntegrationFlow target parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="transformation" /></td>
    <td><code>object</code></td>
    <td>The DataIntegrationFlow transformation parameters.</td>
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
    <td><a href="#get_data_integration_flow"><CopyableCode code="get_data_integration_flow" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to programmatically view a specific data pipeline for the provided Amazon Web Services Supply Chain instance and DataIntegrationFlow name.</td>
</tr>
<tr>
    <td><a href="#list_data_integration_flows"><CopyableCode code="list_data_integration_flows" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Enables you to programmatically list all data pipelines for the provided Amazon Web Services Supply Chain instance.</td>
</tr>
<tr>
    <td><a href="#create_data_integration_flow"><CopyableCode code="create_data_integration_flow" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-sources"><code>sources</code></a>, <a href="#parameter-transformation"><code>transformation</code></a>, <a href="#parameter-target"><code>target</code></a></td>
    <td></td>
    <td>Enables you to programmatically create a data pipeline to ingest data from source systems such as Amazon S3 buckets, to a predefined Amazon Web Services Supply Chain dataset (product, inbound_order) or a temporary dataset along with the data transformation query provided with the API.</td>
</tr>
<tr>
    <td><a href="#update_data_integration_flow"><CopyableCode code="update_data_integration_flow" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables you to programmatically update an existing data pipeline to ingest data from the source systems such as, Amazon S3 buckets, to a predefined Amazon Web Services Supply Chain dataset (product, inbound_order) or a temporary dataset along with the data transformation query provided with the API.</td>
</tr>
<tr>
    <td><a href="#delete_data_integration_flow"><CopyableCode code="delete_data_integration_flow" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enable you to programmatically delete an existing data pipeline for the provided Amazon Web Services Supply Chain instance and DataIntegrationFlow name.</td>
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
    <td>The Amazon Web Services Supply Chain instance identifier.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the DataIntegrationFlow to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Specify the maximum number of DataIntegrationFlows to fetch in one paginated request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token to fetch the next page of the DataIntegrationFlows.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_data_integration_flow"
    values={[
        { label: 'get_data_integration_flow', value: 'get_data_integration_flow' },
        { label: 'list_data_integration_flows', value: 'list_data_integration_flows' }
    ]}
>
<TabItem value="get_data_integration_flow">

Enables you to programmatically view a specific data pipeline for the provided Amazon Web Services Supply Chain instance and DataIntegrationFlow name.

```sql
SELECT
name,
created_time,
instance_id,
last_modified_time,
sources,
target,
transformation
FROM aws.supplychain.data_integration_flows
WHERE instance_id = '{{ instance_id }}' -- required
AND name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_integration_flows">

Enables you to programmatically list all data pipelines for the provided Amazon Web Services Supply Chain instance.

```sql
SELECT
name,
created_time,
instance_id,
last_modified_time,
sources,
target,
transformation
FROM aws.supplychain.data_integration_flows
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_integration_flow"
    values={[
        { label: 'create_data_integration_flow', value: 'create_data_integration_flow' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_integration_flow">

Enables you to programmatically create a data pipeline to ingest data from source systems such as Amazon S3 buckets, to a predefined Amazon Web Services Supply Chain dataset (product, inbound_order) or a temporary dataset along with the data transformation query provided with the API.

```sql
INSERT INTO aws.supplychain.data_integration_flows (
sources,
transformation,
target,
tags,
instance_id,
name,
region
)
SELECT 
'{{ sources }}' /* required */,
'{{ transformation }}' /* required */,
'{{ target }}' /* required */,
'{{ tags }}',
'{{ instance_id }}',
'{{ name }}',
'{{ region }}'
RETURNING
name,
instance_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_integration_flows
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the data_integration_flows resource.
    - name: name
      value: "{{ name }}"
      description: Required parameter for the data_integration_flows resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_integration_flows resource.
    - name: sources
      value:
        - sourceType: "{{ sourceType }}"
          sourceName: "{{ sourceName }}"
          s3Source:
            bucketName: "{{ bucketName }}"
            prefix: "{{ prefix }}"
            options:
              fileType: "{{ fileType }}"
          datasetSource:
            datasetIdentifier: "{{ datasetIdentifier }}"
            options:
              loadType: "{{ loadType }}"
              dedupeRecords: {{ dedupeRecords }}
              dedupeStrategy:
                type_: "{{ type_ }}"
                fieldPriority:
                  fields: "{{ fields }}"
    - name: transformation
      description: |
        The DataIntegrationFlow transformation parameters.
      value:
        transformationType: "{{ transformationType }}"
        sqlTransformation:
          query: "{{ query }}"
    - name: target
      description: |
        The DataIntegrationFlow target parameters.
      value:
        targetType: "{{ targetType }}"
        s3Target:
          bucketName: "{{ bucketName }}"
          prefix: "{{ prefix }}"
          options:
            fileType: "{{ fileType }}"
        datasetTarget:
          datasetIdentifier: "{{ datasetIdentifier }}"
          options:
            loadType: "{{ loadType }}"
            dedupeRecords: {{ dedupeRecords }}
            dedupeStrategy:
              type_: "{{ type_ }}"
              fieldPriority:
                fields: "{{ fields }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_data_integration_flow"
    values={[
        { label: 'update_data_integration_flow', value: 'update_data_integration_flow' }
    ]}
>
<TabItem value="update_data_integration_flow">

Enables you to programmatically update an existing data pipeline to ingest data from the source systems such as, Amazon S3 buckets, to a predefined Amazon Web Services Supply Chain dataset (product, inbound_order) or a temporary dataset along with the data transformation query provided with the API.

```sql
UPDATE aws.supplychain.data_integration_flows
SET 
sources = '{{ sources }}',
transformation = '{{ transformation }}',
target = '{{ target }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
flow;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_integration_flow"
    values={[
        { label: 'delete_data_integration_flow', value: 'delete_data_integration_flow' }
    ]}
>
<TabItem value="delete_data_integration_flow">

Enable you to programmatically delete an existing data pipeline for the provided Amazon Web Services Supply Chain instance and DataIntegrationFlow name.

```sql
DELETE FROM aws.supplychain.data_integration_flows
WHERE instance_id = '{{ instance_id }}' --required
AND name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
