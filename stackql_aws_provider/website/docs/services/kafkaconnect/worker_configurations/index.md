--- 
title: worker_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - worker_configurations
  - kafkaconnect
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

Creates, updates, deletes, gets or lists a <code>worker_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="worker_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafkaconnect.worker_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_worker_configuration"
    values={[
        { label: 'describe_worker_configuration', value: 'describe_worker_configuration' },
        { label: 'list_worker_configurations', value: 'list_worker_configurations' }
    ]}
>
<TabItem value="describe_worker_configuration">

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
    <td>The name of the worker configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that the worker configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the worker configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_revision" /></td>
    <td><code>object</code></td>
    <td>The latest revision of the custom configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the custom configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_configuration_state" /></td>
    <td><code>string</code></td>
    <td>The state of the worker configuration. (ACTIVE, DELETING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_worker_configurations">

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
    <td>The name of the worker configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that a worker configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a worker configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_revision" /></td>
    <td><code>object</code></td>
    <td>The latest revision of a worker configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the worker configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="worker_configuration_state" /></td>
    <td><code>string</code></td>
    <td>The state of the worker configuration. (ACTIVE, DELETING)</td>
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
    <td><a href="#describe_worker_configuration"><CopyableCode code="describe_worker_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-worker_configuration_arn"><code>worker_configuration_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a worker configuration.</td>
</tr>
<tr>
    <td><a href="#list_worker_configurations"><CopyableCode code="list_worker_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-namePrefix"><code>namePrefix</code></a></td>
    <td>Returns a list of all of the worker configurations in this account and Region.</td>
</tr>
<tr>
    <td><a href="#create_worker_configuration"><CopyableCode code="create_worker_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-propertiesFileContent"><code>propertiesFileContent</code></a></td>
    <td></td>
    <td>Creates a worker configuration using the specified properties.</td>
</tr>
<tr>
    <td><a href="#delete_worker_configuration"><CopyableCode code="delete_worker_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-worker_configuration_arn"><code>worker_configuration_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified worker configuration.</td>
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
<tr id="parameter-worker_configuration_arn">
    <td><CopyableCode code="worker_configuration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the worker configuration that you want to delete.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of worker configurations to list in one response.</td>
</tr>
<tr id="parameter-namePrefix">
    <td><CopyableCode code="namePrefix" /></td>
    <td><code>string</code></td>
    <td>Lists worker configuration names that start with the specified text string.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the response of a ListWorkerConfigurations operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_worker_configuration"
    values={[
        { label: 'describe_worker_configuration', value: 'describe_worker_configuration' },
        { label: 'list_worker_configurations', value: 'list_worker_configurations' }
    ]}
>
<TabItem value="describe_worker_configuration">

Returns information about a worker configuration.

```sql
SELECT
name,
creation_time,
description,
latest_revision,
worker_configuration_arn,
worker_configuration_state
FROM aws.kafkaconnect.worker_configurations
WHERE worker_configuration_arn = '{{ worker_configuration_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_worker_configurations">

Returns a list of all of the worker configurations in this account and Region.

```sql
SELECT
name,
creation_time,
description,
latest_revision,
worker_configuration_arn,
worker_configuration_state
FROM aws.kafkaconnect.worker_configurations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND namePrefix = '{{ namePrefix }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_worker_configuration"
    values={[
        { label: 'create_worker_configuration', value: 'create_worker_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_worker_configuration">

Creates a worker configuration using the specified properties.

```sql
INSERT INTO aws.kafkaconnect.worker_configurations (
description,
name,
propertiesFileContent,
tags,
region
)
SELECT 
'{{ description }}',
'{{ name }}' /* required */,
'{{ propertiesFileContent }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
name,
creation_time,
latest_revision,
worker_configuration_arn,
worker_configuration_state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: worker_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the worker_configurations resource.
    - name: description
      value: "{{ description }}"
    - name: name
      value: "{{ name }}"
    - name: propertiesFileContent
      value: "{{ propertiesFileContent }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_worker_configuration"
    values={[
        { label: 'delete_worker_configuration', value: 'delete_worker_configuration' }
    ]}
>
<TabItem value="delete_worker_configuration">

Deletes the specified worker configuration.

```sql
DELETE FROM aws.kafkaconnect.worker_configurations
WHERE worker_configuration_arn = '{{ worker_configuration_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
