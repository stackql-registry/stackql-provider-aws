--- 
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
  - mq
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

Creates, updates, deletes, gets or lists a <code>configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mq.configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configuration"
    values={[
        { label: 'describe_configuration', value: 'describe_configuration' },
        { label: 'list_configurations', value: 'list_configurations' }
    ]}
>
<TabItem value="describe_configuration">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>Required. The ARN of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthenticationStrategy" /></td>
    <td><code>string</code></td>
    <td>Optional. The authentication strategy used to secure the broker. The default is SIMPLE. (SIMPLE, LDAP, CONFIG_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="Created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Required. The date and time of the configuration revision.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Required. The description of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="EngineType" /></td>
    <td><code>string</code></td>
    <td>The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ. (ACTIVEMQ, RABBITMQ)</td>
</tr>
<tr>
    <td><CopyableCode code="EngineVersion" /></td>
    <td><code>string</code></td>
    <td>The broker engine version. Defaults to the latest available version for the specified broker engine type. For a list of supported engine versions, see the ActiveMQ version management and the RabbitMQ version management sections in the Amazon MQ Developer Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>Required. The unique ID that Amazon MQ generates for the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestRevision" /></td>
    <td><code>object</code></td>
    <td>Required. The latest revision of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>object</code></td>
    <td>The list of all tags associated with this configuration.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_configurations">

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
    <td><CopyableCode code="Configurations" /></td>
    <td><code>array</code></td>
    <td>The list of all revisions for the specified configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</td>
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
    <td><a href="#describe_configuration"><CopyableCode code="describe_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-configuration-id"><code>configuration-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the specified configuration.</td>
</tr>
<tr>
    <td><a href="#list_configurations"><CopyableCode code="list_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all configurations.</td>
</tr>
<tr>
    <td><a href="#create_configuration"><CopyableCode code="create_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EngineType"><code>EngineType</code></a></td>
    <td></td>
    <td>Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).</td>
</tr>
<tr>
    <td><a href="#update_configuration"><CopyableCode code="update_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-configuration-id"><code>configuration-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Data"><code>Data</code></a></td>
    <td></td>
    <td>Updates the specified configuration.</td>
</tr>
<tr>
    <td><a href="#delete_configuration"><CopyableCode code="delete_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-configuration-id"><code>configuration-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified configuration.</td>
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
<tr id="parameter-configuration-id">
    <td><CopyableCode code="configuration-id" /></td>
    <td><code>string</code></td>
    <td>The unique ID that Amazon MQ generates for the configuration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_configuration"
    values={[
        { label: 'describe_configuration', value: 'describe_configuration' },
        { label: 'list_configurations', value: 'list_configurations' }
    ]}
>
<TabItem value="describe_configuration">

Returns information about the specified configuration.

```sql
SELECT
Arn,
AuthenticationStrategy,
Created,
Description,
EngineType,
EngineVersion,
Id,
LatestRevision,
Name,
Tags
FROM aws.mq.configurations
WHERE `configuration-id` = '{{ configuration-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configurations">

Returns a list of all configurations.

```sql
SELECT
Configurations,
MaxResults,
NextToken
FROM aws.mq.configurations
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_configuration"
    values={[
        { label: 'create_configuration', value: 'create_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_configuration">

Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).

```sql
INSERT INTO aws.mq.configurations (
AuthenticationStrategy,
EngineType,
EngineVersion,
Name,
Tags,
region
)
SELECT 
'{{ AuthenticationStrategy }}',
'{{ EngineType }}' /* required */,
'{{ EngineVersion }}',
'{{ Name }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
Arn,
AuthenticationStrategy,
Created,
Id,
LatestRevision,
Name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the configurations resource.
    - name: AuthenticationStrategy
      value: "{{ AuthenticationStrategy }}"
      description: |
        Optional. The authentication strategy used to secure the broker. The default is SIMPLE.
      valid_values: ['SIMPLE', 'LDAP', 'CONFIG_MANAGED']
    - name: EngineType
      value: "{{ EngineType }}"
      description: |
        The type of broker engine. Amazon MQ supports ActiveMQ and RabbitMQ.
      valid_values: ['ACTIVEMQ', 'RABBITMQ']
    - name: EngineVersion
      value: "{{ EngineVersion }}"
    - name: Name
      value: "{{ Name }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_configuration"
    values={[
        { label: 'update_configuration', value: 'update_configuration' }
    ]}
>
<TabItem value="update_configuration">

Updates the specified configuration.

```sql
UPDATE aws.mq.configurations
SET 
Data = '{{ Data }}',
Description = '{{ Description }}'
WHERE 
`configuration-id` = '{{ configuration-id }}' --required
AND region = '{{ region }}' --required
AND Data = '{{ Data }}' --required
RETURNING
Arn,
Created,
Id,
LatestRevision,
Name,
Warnings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_configuration"
    values={[
        { label: 'delete_configuration', value: 'delete_configuration' }
    ]}
>
<TabItem value="delete_configuration">

Deletes the specified configuration.

```sql
DELETE FROM aws.mq.configurations
WHERE `configuration-id` = '{{ configuration-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
