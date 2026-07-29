--- 
title: configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - configurations
  - kafka
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kafka.configurations" /></td></tr>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_versions" /></td>
    <td><code>array</code></td>
    <td>The versions of Apache Kafka with which you can use this MSK configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_revision" /></td>
    <td><code>object</code></td>
    <td>Latest revision of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. (ACTIVE, DELETING, DELETE_FAILED)</td>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the configuration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="kafka_versions" /></td>
    <td><code>array</code></td>
    <td>An array of the versions of Apache Kafka with which you can use this MSK configuration. You can use this configuration for an MSK cluster only if the Apache Kafka version specified for the cluster appears in this array.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_revision" /></td>
    <td><code>object</code></td>
    <td>Latest revision of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the configuration. The possible states are ACTIVE, DELETING, and DELETE_FAILED. (ACTIVE, DELETING, DELETE_FAILED)</td>
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
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a description of this MSK configuration.</td>
</tr>
<tr>
    <td><a href="#list_configurations"><CopyableCode code="list_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all the MSK configurations in this Region.</td>
</tr>
<tr>
    <td><a href="#create_configuration"><CopyableCode code="create_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerProperties"><code>ServerProperties</code></a></td>
    <td></td>
    <td>Creates a new MSK configuration.</td>
</tr>
<tr>
    <td><a href="#update_cluster_configuration"><CopyableCode code="update_cluster_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_arn"><code>cluster_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConfigurationInfo"><code>ConfigurationInfo</code></a>, <a href="#parameter-CurrentVersion"><code>CurrentVersion</code></a></td>
    <td></td>
    <td>Updates the cluster with the configuration that is specified in the request body.</td>
</tr>
<tr>
    <td><a href="#update_configuration"><CopyableCode code="update_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerProperties"><code>ServerProperties</code></a></td>
    <td></td>
    <td>Updates an MSK configuration.</td>
</tr>
<tr>
    <td><a href="#delete_configuration"><CopyableCode code="delete_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an MSK Configuration.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies an MSK configuration.</td>
</tr>
<tr id="parameter-cluster_arn">
    <td><CopyableCode code="cluster_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the cluster.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If there are more results, the response includes a NextToken parameter.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The paginated results marker. When the result of the operation is truncated, the call returns NextToken in the response. To get the next batch, provide this token in your next request.</td>
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

Returns a description of this MSK configuration.

```sql
SELECT
arn,
creation_time,
description,
kafka_versions,
latest_revision,
name,
state
FROM aws.kafka.configurations
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_configurations">

Returns a list of all the MSK configurations in this Region.

```sql
SELECT
arn,
creation_time,
description,
kafka_versions,
latest_revision,
name,
state
FROM aws.kafka.configurations
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

Creates a new MSK configuration.

```sql
INSERT INTO aws.kafka.configurations (
Description,
KafkaVersions,
Name,
ServerProperties,
region
)
SELECT 
'{{ Description }}',
'{{ KafkaVersions }}',
'{{ Name }}',
'{{ ServerProperties }}' /* required */,
'{{ region }}'
RETURNING
arn,
creation_time,
latest_revision,
name,
state
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
    - name: Description
      value: "{{ Description }}"
    - name: KafkaVersions
      value:
        - "{{ KafkaVersions }}"
    - name: Name
      value: "{{ Name }}"
    - name: ServerProperties
      value: "{{ ServerProperties }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_cluster_configuration"
    values={[
        { label: 'update_cluster_configuration', value: 'update_cluster_configuration' },
        { label: 'update_configuration', value: 'update_configuration' }
    ]}
>
<TabItem value="update_cluster_configuration">

Updates the cluster with the configuration that is specified in the request body.

```sql
UPDATE aws.kafka.configurations
SET 
ConfigurationInfo = '{{ ConfigurationInfo }}',
CurrentVersion = '{{ CurrentVersion }}'
WHERE 
cluster_arn = '{{ cluster_arn }}' --required
AND region = '{{ region }}' --required
AND ConfigurationInfo = '{{ ConfigurationInfo }}' --required
AND CurrentVersion = '{{ CurrentVersion }}' --required
RETURNING
cluster_arn,
cluster_operation_arn;
```
</TabItem>
<TabItem value="update_configuration">

Updates an MSK configuration.

```sql
UPDATE aws.kafka.configurations
SET 
Description = '{{ Description }}',
ServerProperties = '{{ ServerProperties }}'
WHERE 
arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
AND ServerProperties = '{{ ServerProperties }}' --required
RETURNING
arn,
latest_revision;
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

Deletes an MSK Configuration.

```sql
DELETE FROM aws.kafka.configurations
WHERE arn = '{{ arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
