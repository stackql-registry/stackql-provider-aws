--- 
title: indexes
hide_title: false
hide_table_of_contents: false
keywords:
  - indexes
  - qbusiness
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

Creates, updates, deletes, gets or lists an <code>indexes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="indexes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.qbusiness.indexes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_index"
    values={[
        { label: 'get_index', value: 'get_index' }
    ]}
>
<TabItem value="get_index">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application associated with the index. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_configuration" /></td>
    <td><code>object</code></td>
    <td>Provides information about index capacity configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business index was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the Amazon Q Business index. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Q Business index. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_attribute_configurations" /></td>
    <td><code>array</code></td>
    <td>Configuration information for document attributes or metadata. Document metadata are fields associated with your documents. For example, the company department name associated with each document. For more information, see Understanding document attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>object</code></td>
    <td>Provides information about a Amazon Q Business request error.</td>
</tr>
<tr>
    <td><CopyableCode code="index_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon Q Business index. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business index. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;&#123;35&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="index_statistics" /></td>
    <td><code>object</code></td>
    <td>Provides information about the number of documents indexed.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the index. When the value is ACTIVE, the index is ready for use. If the Status field value is FAILED, the ErrorMessage field contains a message that explains why. (CREATING, ACTIVE, DELETING, FAILED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of index attached to your Amazon Q Business application. (ENTERPRISE, STARTER)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The Unix timestamp when the Amazon Q Business index was last updated.</td>
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
    <td><a href="#get_index"><CopyableCode code="get_index" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an existing Amazon Q Business index.</td>
</tr>
<tr>
    <td><a href="#create_index"><CopyableCode code="create_index" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-displayName"><code>displayName</code></a></td>
    <td></td>
    <td>Creates an Amazon Q Business index. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active, you can index your documents using the BatchPutDocument API or the CreateDataSource API.</td>
</tr>
<tr>
    <td><a href="#update_index"><CopyableCode code="update_index" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Amazon Q Business index.</td>
</tr>
<tr>
    <td><a href="#delete_index"><CopyableCode code="delete_index" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-index_id"><code>index_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Q Business index.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business application the Amazon Q Business index is linked to.</td>
</tr>
<tr id="parameter-index_id">
    <td><CopyableCode code="index_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Q Business index.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_index"
    values={[
        { label: 'get_index', value: 'get_index' }
    ]}
>
<TabItem value="get_index">

Gets information about an existing Amazon Q Business index.

```sql
SELECT
application_id,
capacity_configuration,
created_at,
description,
display_name,
document_attribute_configurations,
error,
index_arn,
index_id,
index_statistics,
status,
type_,
updated_at
FROM aws.qbusiness.indexes
WHERE application_id = '{{ application_id }}' -- required
AND index_id = '{{ index_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_index"
    values={[
        { label: 'create_index', value: 'create_index' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_index">

Creates an Amazon Q Business index. To determine if index creation has completed, check the Status field returned from a call to DescribeIndex. The Status field is set to ACTIVE when the index is ready to use. Once the index is active, you can index your documents using the BatchPutDocument API or the CreateDataSource API.

```sql
INSERT INTO aws.qbusiness.indexes (
displayName,
description,
type,
tags,
capacityConfiguration,
clientToken,
application_id,
region
)
SELECT 
'{{ displayName }}' /* required */,
'{{ description }}',
'{{ type }}',
'{{ tags }}',
'{{ capacityConfiguration }}',
'{{ clientToken }}',
'{{ application_id }}',
'{{ region }}'
RETURNING
index_arn,
index_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: indexes
  props:
    - name: application_id
      value: "{{ application_id }}"
      description: Required parameter for the indexes resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the indexes resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: description
      value: "{{ description }}"
    - name: type
      value: "{{ type }}"
      valid_values: ['ENTERPRISE', 'STARTER']
    - name: tags
      value:
        - key: "{{ key }}"
          value: "{{ value }}"
    - name: capacityConfiguration
      description: |
        Provides information about index capacity configuration.
      value:
        units: {{ units }}
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_index"
    values={[
        { label: 'update_index', value: 'update_index' }
    ]}
>
<TabItem value="update_index">

Updates an Amazon Q Business index.

```sql
UPDATE aws.qbusiness.indexes
SET 
displayName = '{{ displayName }}',
description = '{{ description }}',
capacityConfiguration = '{{ capacityConfiguration }}',
documentAttributeConfigurations = '{{ documentAttributeConfigurations }}'
WHERE 
application_id = '{{ application_id }}' --required
AND index_id = '{{ index_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_index"
    values={[
        { label: 'delete_index', value: 'delete_index' }
    ]}
>
<TabItem value="delete_index">

Deletes an Amazon Q Business index.

```sql
DELETE FROM aws.qbusiness.indexes
WHERE application_id = '{{ application_id }}' --required
AND index_id = '{{ index_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
