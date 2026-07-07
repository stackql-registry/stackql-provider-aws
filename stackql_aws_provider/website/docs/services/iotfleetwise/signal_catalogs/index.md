--- 
title: signal_catalogs
hide_title: false
hide_table_of_contents: false
keywords:
  - signal_catalogs
  - iotfleetwise
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

Creates, updates, deletes, gets or lists a <code>signal_catalogs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signal_catalogs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotfleetwise.signal_catalogs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_signal_catalog"
    values={[
        { label: 'get_signal_catalog', value: 'get_signal_catalog' },
        { label: 'list_signal_catalogs', value: 'list_signal_catalogs' }
    ]}
>
<TabItem value="get_signal_catalog">

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
    <td>The name of the signal catalog. (pattern: &lt;code&gt;&#91;a-zA-Z\d\-_:&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the signal catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the signal catalog was created in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A brief description of the signal catalog. (pattern: &lt;code&gt;&#91;^\u0000-\u001F\u007F&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time the signal catalog was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="nodeCounts" /></td>
    <td><code>object</code></td>
    <td>The total number of network nodes specified in a signal catalog.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_signal_catalogs">

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
    <td>The name of the signal catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the signal catalog.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the signal catalog was created in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
</tr>
<tr>
    <td><CopyableCode code="lastModificationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the signal catalog was last updated in seconds since epoch (January 1, 1970 at midnight UTC time).</td>
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
    <td><a href="#get_signal_catalog"><CopyableCode code="get_signal_catalog" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a signal catalog.</td>
</tr>
<tr>
    <td><a href="#list_signal_catalogs"><CopyableCode code="list_signal_catalogs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the created signal catalogs in an Amazon Web Services account. You can use to list information about each signal (node) specified in a signal catalog. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.</td>
</tr>
<tr>
    <td><a href="#create_signal_catalog"><CopyableCode code="create_signal_catalog" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a collection of standardized signals that can be reused to create vehicle models.</td>
</tr>
<tr>
    <td><a href="#update_signal_catalog"><CopyableCode code="update_signal_catalog" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates a signal catalog.</td>
</tr>
<tr>
    <td><a href="#delete_signal_catalog"><CopyableCode code="delete_signal_catalog" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a signal catalog.</td>
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
    defaultValue="get_signal_catalog"
    values={[
        { label: 'get_signal_catalog', value: 'get_signal_catalog' },
        { label: 'list_signal_catalogs', value: 'list_signal_catalogs' }
    ]}
>
<TabItem value="get_signal_catalog">

Retrieves information about a signal catalog.

```sql
SELECT
name,
arn,
creationTime,
description,
lastModificationTime,
nodeCounts
FROM aws.iotfleetwise.signal_catalogs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_signal_catalogs">

Lists all the created signal catalogs in an Amazon Web Services account. You can use to list information about each signal (node) specified in a signal catalog. This API operation uses pagination. Specify the nextToken parameter in the request to return more results.

```sql
SELECT
name,
arn,
creationTime,
lastModificationTime
FROM aws.iotfleetwise.signal_catalogs
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_signal_catalog"
    values={[
        { label: 'create_signal_catalog', value: 'create_signal_catalog' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_signal_catalog">

Creates a collection of standardized signals that can be reused to create vehicle models.

```sql
INSERT INTO aws.iotfleetwise.signal_catalogs (
name,
description,
nodes,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ nodes }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: signal_catalogs
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the signal_catalogs resource.
    - name: name
      value: "{{ name }}"
      description: |
        The name of the signal catalog to create.
    - name: description
      value: "{{ description }}"
      description: |
        A brief description of the signal catalog.
    - name: nodes
      description: |
        A list of information about nodes, which are a general abstraction of signals. For more information, see the API data type.
      value:
        - branch:
            fullyQualifiedName: "{{ fullyQualifiedName }}"
            description: "{{ description }}"
            deprecationMessage: "{{ deprecationMessage }}"
            comment: "{{ comment }}"
          sensor:
            fullyQualifiedName: "{{ fullyQualifiedName }}"
            dataType: "{{ dataType }}"
            description: "{{ description }}"
            unit: "{{ unit }}"
            allowedValues:
              - "{{ allowedValues }}"
            min: {{ min }}
            max: {{ max }}
            deprecationMessage: "{{ deprecationMessage }}"
            comment: "{{ comment }}"
            structFullyQualifiedName: "{{ structFullyQualifiedName }}"
          actuator:
            fullyQualifiedName: "{{ fullyQualifiedName }}"
            dataType: "{{ dataType }}"
            description: "{{ description }}"
            unit: "{{ unit }}"
            allowedValues:
              - "{{ allowedValues }}"
            min: {{ min }}
            max: {{ max }}
            assignedValue: "{{ assignedValue }}"
            deprecationMessage: "{{ deprecationMessage }}"
            comment: "{{ comment }}"
            structFullyQualifiedName: "{{ structFullyQualifiedName }}"
          attribute:
            fullyQualifiedName: "{{ fullyQualifiedName }}"
            dataType: "{{ dataType }}"
            description: "{{ description }}"
            unit: "{{ unit }}"
            allowedValues:
              - "{{ allowedValues }}"
            min: {{ min }}
            max: {{ max }}
            assignedValue: "{{ assignedValue }}"
            defaultValue: "{{ defaultValue }}"
            deprecationMessage: "{{ deprecationMessage }}"
            comment: "{{ comment }}"
          struct:
            fullyQualifiedName: "{{ fullyQualifiedName }}"
            description: "{{ description }}"
            deprecationMessage: "{{ deprecationMessage }}"
            comment: "{{ comment }}"
          property:
            fullyQualifiedName: "{{ fullyQualifiedName }}"
            dataType: "{{ dataType }}"
            dataEncoding: "{{ dataEncoding }}"
            description: "{{ description }}"
            deprecationMessage: "{{ deprecationMessage }}"
            comment: "{{ comment }}"
            structFullyQualifiedName: "{{ structFullyQualifiedName }}"
    - name: tags
      description: |
        Metadata that can be used to manage the signal catalog.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_signal_catalog"
    values={[
        { label: 'update_signal_catalog', value: 'update_signal_catalog' }
    ]}
>
<TabItem value="update_signal_catalog">

Updates a signal catalog.

```sql
UPDATE aws.iotfleetwise.signal_catalogs
SET 
name = '{{ name }}',
description = '{{ description }}',
nodesToAdd = '{{ nodesToAdd }}',
nodesToUpdate = '{{ nodesToUpdate }}',
nodesToRemove = '{{ nodesToRemove }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required
RETURNING
name,
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_signal_catalog"
    values={[
        { label: 'delete_signal_catalog', value: 'delete_signal_catalog' }
    ]}
>
<TabItem value="delete_signal_catalog">

Deletes a signal catalog.

```sql
DELETE FROM aws.iotfleetwise.signal_catalogs
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
