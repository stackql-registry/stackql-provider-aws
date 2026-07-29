--- 
title: dimensions
hide_title: false
hide_table_of_contents: false
keywords:
  - dimensions
  - iot
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

Creates, updates, deletes, gets or lists a <code>dimensions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dimensions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.dimensions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_dimension"
    values={[
        { label: 'describe_dimension', value: 'describe_dimension' },
        { label: 'list_dimensions', value: 'list_dimensions' }
    ]}
>
<TabItem value="describe_dimension">

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
    <td>The unique identifier for the dimension. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the dimension.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the dimension was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date the dimension was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="string_values" /></td>
    <td><code>array</code></td>
    <td>The value or list of values used to scope the dimension. For example, for topic filters, this is the pattern used to match the MQTT topic name.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the dimension. (TOPIC_FILTER)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_dimensions">

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
    <td><CopyableCode code="dimension_name" /></td>
    <td><code>string</code></td>
    <td>A list of the names of the defined dimensions. Use DescribeDimension to get details for a dimension.</td>
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
    <td><a href="#describe_dimension"><CopyableCode code="describe_dimension" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides details about a dimension that is defined in your Amazon Web Services accounts. Requires permission to access the DescribeDimension action.</td>
</tr>
<tr>
    <td><a href="#list_dimensions"><CopyableCode code="list_dimensions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>List the set of dimensions that are defined for your Amazon Web Services accounts. Requires permission to access the ListDimensions action.</td>
</tr>
<tr>
    <td><a href="#create_dimension"><CopyableCode code="create_dimension" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-stringValues"><code>stringValues</code></a>, <a href="#parameter-clientRequestToken"><code>clientRequestToken</code></a></td>
    <td></td>
    <td>Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender. For example, using a TOPIC_FILTER dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension. Requires permission to access the CreateDimension action.</td>
</tr>
<tr>
    <td><a href="#update_dimension"><CopyableCode code="update_dimension" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-stringValues"><code>stringValues</code></a></td>
    <td></td>
    <td>Updates the definition for a dimension. You cannot change the type of a dimension after it is created (you can delete it and recreate it). Requires permission to access the UpdateDimension action.</td>
</tr>
<tr>
    <td><a href="#delete_dimension"><CopyableCode code="delete_dimension" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified dimension from your Amazon Web Services accounts. Requires permission to access the DeleteDimension action.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the dimension that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to retrieve at one time.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_dimension"
    values={[
        { label: 'describe_dimension', value: 'describe_dimension' },
        { label: 'list_dimensions', value: 'list_dimensions' }
    ]}
>
<TabItem value="describe_dimension">

Provides details about a dimension that is defined in your Amazon Web Services accounts. Requires permission to access the DescribeDimension action.

```sql
SELECT
name,
arn,
creation_date,
last_modified_date,
string_values,
type_
FROM aws.iot.dimensions
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_dimensions">

List the set of dimensions that are defined for your Amazon Web Services accounts. Requires permission to access the ListDimensions action.

```sql
SELECT
dimension_name
FROM aws.iot.dimensions
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_dimension"
    values={[
        { label: 'create_dimension', value: 'create_dimension' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_dimension">

Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender. For example, using a TOPIC_FILTER dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension. Requires permission to access the CreateDimension action.

```sql
INSERT INTO aws.iot.dimensions (
type,
stringValues,
tags,
clientRequestToken,
name,
region
)
SELECT 
'{{ type }}' /* required */,
'{{ stringValues }}' /* required */,
'{{ tags }}',
'{{ clientRequestToken }}' /* required */,
'{{ name }}',
'{{ region }}'
RETURNING
name,
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dimensions
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the dimensions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the dimensions resource.
    - name: type
      value: "{{ type }}"
      valid_values: ['TOPIC_FILTER']
    - name: stringValues
      value:
        - "{{ stringValues }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: clientRequestToken
      value: "{{ clientRequestToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_dimension"
    values={[
        { label: 'update_dimension', value: 'update_dimension' }
    ]}
>
<TabItem value="update_dimension">

Updates the definition for a dimension. You cannot change the type of a dimension after it is created (you can delete it and recreate it). Requires permission to access the UpdateDimension action.

```sql
UPDATE aws.iot.dimensions
SET 
stringValues = '{{ stringValues }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND stringValues = '{{ stringValues }}' --required
RETURNING
name,
arn,
creation_date,
last_modified_date,
string_values,
type_;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_dimension"
    values={[
        { label: 'delete_dimension', value: 'delete_dimension' }
    ]}
>
<TabItem value="delete_dimension">

Removes the specified dimension from your Amazon Web Services accounts. Requires permission to access the DeleteDimension action.

```sql
DELETE FROM aws.iot.dimensions
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
