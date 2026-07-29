--- 
title: adapters
hide_title: false
hide_table_of_contents: false
keywords:
  - adapters
  - textract
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

Creates, updates, deletes, gets or lists an <code>adapters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="adapters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.textract.adapters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_adapter"
    values={[
        { label: 'get_adapter', value: 'get_adapter' },
        { label: 'list_adapters', value: 'list_adapters' }
    ]}
>
<TabItem value="get_adapter">

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
    <td><CopyableCode code="adapter_id" /></td>
    <td><code>string</code></td>
    <td>A string identifying the adapter that information has been retrieved for.</td>
</tr>
<tr>
    <td><CopyableCode code="adapter_name" /></td>
    <td><code>string</code></td>
    <td>The name of the requested adapter. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_update" /></td>
    <td><code>string</code></td>
    <td>Binary value indicating if the adapter is being automatically updated or not. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the requested adapter was created at.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the requested adapter. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\s!"\#\$%'&\(\)\*\+\,\-\./:;=\?@\&#91;\\\&#93;\^_`\&#123;\|\&#125;~&gt;&lt;&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="feature_types" /></td>
    <td><code>array</code></td>
    <td>List of the targeted feature types for the requested adapter.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>A set of tags (key-value pairs) associated with the adapter that has been retrieved.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_adapters">

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
    <td><CopyableCode code="adapter_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the adapter resource.</td>
</tr>
<tr>
    <td><CopyableCode code="adapter_name" /></td>
    <td><code>string</code></td>
    <td>A string naming the adapter resource. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the adapter was created.</td>
</tr>
<tr>
    <td><CopyableCode code="feature_types" /></td>
    <td><code>array</code></td>
    <td>The feature types that the adapter is operating on.</td>
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
    <td><a href="#get_adapter"><CopyableCode code="get_adapter" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets configuration information for an adapter specified by an AdapterId, returning information on AdapterName, Description, CreationTime, AutoUpdate status, and FeatureTypes.</td>
</tr>
<tr>
    <td><a href="#list_adapters"><CopyableCode code="list_adapters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all adapters that match the specified filtration criteria.</td>
</tr>
<tr>
    <td><a href="#create_adapter"><CopyableCode code="create_adapter" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AdapterName"><code>AdapterName</code></a>, <a href="#parameter-FeatureTypes"><code>FeatureTypes</code></a></td>
    <td></td>
    <td>Creates an adapter, which can be fine-tuned for enhanced performance on user provided documents. Takes an AdapterName and FeatureType. Currently the only supported feature type is QUERIES. You can also provide a Description, Tags, and a ClientRequestToken. You can choose whether or not the adapter should be AutoUpdated with the AutoUpdate argument. By default, AutoUpdate is set to DISABLED.</td>
</tr>
<tr>
    <td><a href="#update_adapter"><CopyableCode code="update_adapter" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AdapterId"><code>AdapterId</code></a></td>
    <td></td>
    <td>Update the configuration for an adapter. FeatureTypes configurations cannot be updated. At least one new parameter must be specified as an argument.</td>
</tr>
<tr>
    <td><a href="#delete_adapter"><CopyableCode code="delete_adapter" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Textract adapter. Takes an AdapterId and deletes the adapter specified by the ID.</td>
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
    defaultValue="get_adapter"
    values={[
        { label: 'get_adapter', value: 'get_adapter' },
        { label: 'list_adapters', value: 'list_adapters' }
    ]}
>
<TabItem value="get_adapter">

Gets configuration information for an adapter specified by an AdapterId, returning information on AdapterName, Description, CreationTime, AutoUpdate status, and FeatureTypes.

```sql
SELECT
adapter_id,
adapter_name,
auto_update,
creation_time,
description,
feature_types,
tags
FROM aws.textract.adapters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_adapters">

Lists all adapters that match the specified filtration criteria.

```sql
SELECT
adapter_id,
adapter_name,
creation_time,
feature_types
FROM aws.textract.adapters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_adapter"
    values={[
        { label: 'create_adapter', value: 'create_adapter' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_adapter">

Creates an adapter, which can be fine-tuned for enhanced performance on user provided documents. Takes an AdapterName and FeatureType. Currently the only supported feature type is QUERIES. You can also provide a Description, Tags, and a ClientRequestToken. You can choose whether or not the adapter should be AutoUpdated with the AutoUpdate argument. By default, AutoUpdate is set to DISABLED.

```sql
INSERT INTO aws.textract.adapters (
AdapterName,
ClientRequestToken,
Description,
FeatureTypes,
AutoUpdate,
Tags,
region
)
SELECT 
'{{ AdapterName }}' /* required */,
'{{ ClientRequestToken }}',
'{{ Description }}',
'{{ FeatureTypes }}' /* required */,
'{{ AutoUpdate }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
adapter_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: adapters
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the adapters resource.
    - name: AdapterName
      value: "{{ AdapterName }}"
      description: |
        The name to be assigned to the adapter being created.
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
      description: |
        Idempotent token is used to recognize the request. If the same token is used with multiple CreateAdapter requests, the same session is returned. This token is employed to avoid unintentionally creating the same session multiple times.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description to be assigned to the adapter being created.
    - name: FeatureTypes
      value:
        - "{{ FeatureTypes }}"
      description: |
        The type of feature that the adapter is being trained on. Currrenly, supported feature types are: QUERIES
    - name: AutoUpdate
      value: "{{ AutoUpdate }}"
      description: |
        Controls whether or not the adapter should automatically update.
      valid_values: ['ENABLED', 'DISABLED']
    - name: Tags
      value: "{{ Tags }}"
      description: |
        A list of tags to be added to the adapter.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_adapter"
    values={[
        { label: 'update_adapter', value: 'update_adapter' }
    ]}
>
<TabItem value="update_adapter">

Update the configuration for an adapter. FeatureTypes configurations cannot be updated. At least one new parameter must be specified as an argument.

```sql
UPDATE aws.textract.adapters
SET 
AdapterId = '{{ AdapterId }}',
Description = '{{ Description }}',
AdapterName = '{{ AdapterName }}',
AutoUpdate = '{{ AutoUpdate }}'
WHERE 
region = '{{ region }}' --required
AND AdapterId = '{{ AdapterId }}' --required
RETURNING
adapter_id,
adapter_name,
auto_update,
creation_time,
description,
feature_types;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_adapter"
    values={[
        { label: 'delete_adapter', value: 'delete_adapter' }
    ]}
>
<TabItem value="delete_adapter">

Deletes an Amazon Textract adapter. Takes an AdapterId and deletes the adapter specified by the ID.

```sql
DELETE FROM aws.textract.adapters
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
