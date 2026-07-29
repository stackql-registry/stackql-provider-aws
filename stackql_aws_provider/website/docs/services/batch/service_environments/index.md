--- 
title: service_environments
hide_title: false
hide_table_of_contents: false
keywords:
  - service_environments
  - batch
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

Creates, updates, deletes, gets or lists a <code>service_environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.batch.service_environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_service_environments"
    values={[
        { label: 'describe_service_environments', value: 'describe_service_environments' }
    ]}
>
<TabItem value="describe_service_environments">

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
    <td><CopyableCode code="capacity_limits" /></td>
    <td><code>array</code></td>
    <td>The capacity limits for the service environment. This defines the maximum resources that can be used by service jobs in this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="service_environment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service environment.</td>
</tr>
<tr>
    <td><CopyableCode code="service_environment_name" /></td>
    <td><code>string</code></td>
    <td>The name of the service environment.</td>
</tr>
<tr>
    <td><CopyableCode code="service_environment_type" /></td>
    <td><code>string</code></td>
    <td>The type of service environment. For SageMaker Training jobs, this value is SAGEMAKER_TRAINING. (SAGEMAKER_TRAINING)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the service environment. Valid values are ENABLED and DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the service environment. (CREATING, UPDATING, DELETING, DELETED, VALID, INVALID)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags associated with the service environment. Each tag consists of a key and an optional value. For more information, see Tagging your Batch resources.</td>
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
    <td><a href="#describe_service_environments"><CopyableCode code="describe_service_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes one or more of your service environments.</td>
</tr>
<tr>
    <td><a href="#create_service_environment"><CopyableCode code="create_service_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceEnvironmentName"><code>serviceEnvironmentName</code></a>, <a href="#parameter-serviceEnvironmentType"><code>serviceEnvironmentType</code></a>, <a href="#parameter-capacityLimits"><code>capacityLimits</code></a></td>
    <td></td>
    <td>Creates a service environment for running service jobs. Service environments define capacity limits for specific service types such as SageMaker Training jobs.</td>
</tr>
<tr>
    <td><a href="#update_service_environment"><CopyableCode code="update_service_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-serviceEnvironment"><code>serviceEnvironment</code></a></td>
    <td></td>
    <td>Updates a service environment. You can update the state of a service environment from ENABLED to DISABLED to prevent new service jobs from being placed in the service environment.</td>
</tr>
<tr>
    <td><a href="#delete_service_environment"><CopyableCode code="delete_service_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Service environment. Before you can delete a service environment, you must first set its state to DISABLED with the UpdateServiceEnvironment API operation and disassociate it from any job queues with the UpdateJobQueue API operation.</td>
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
    defaultValue="describe_service_environments"
    values={[
        { label: 'describe_service_environments', value: 'describe_service_environments' }
    ]}
>
<TabItem value="describe_service_environments">

Describes one or more of your service environments.

```sql
SELECT
capacity_limits,
service_environment_arn,
service_environment_name,
service_environment_type,
state,
status,
tags
FROM aws.batch.service_environments
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_environment"
    values={[
        { label: 'create_service_environment', value: 'create_service_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_environment">

Creates a service environment for running service jobs. Service environments define capacity limits for specific service types such as SageMaker Training jobs.

```sql
INSERT INTO aws.batch.service_environments (
serviceEnvironmentName,
serviceEnvironmentType,
state,
capacityLimits,
tags,
region
)
SELECT 
'{{ serviceEnvironmentName }}' /* required */,
'{{ serviceEnvironmentType }}' /* required */,
'{{ state }}',
'{{ capacityLimits }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
service_environment_arn,
service_environment_name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_environments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_environments resource.
    - name: serviceEnvironmentName
      value: "{{ serviceEnvironmentName }}"
    - name: serviceEnvironmentType
      value: "{{ serviceEnvironmentType }}"
      valid_values: ['SAGEMAKER_TRAINING']
    - name: state
      value: "{{ state }}"
      valid_values: ['ENABLED', 'DISABLED']
    - name: capacityLimits
      value:
        - maxCapacity: {{ maxCapacity }}
          capacityUnit: "{{ capacityUnit }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_environment"
    values={[
        { label: 'update_service_environment', value: 'update_service_environment' }
    ]}
>
<TabItem value="update_service_environment">

Updates a service environment. You can update the state of a service environment from ENABLED to DISABLED to prevent new service jobs from being placed in the service environment.

```sql
UPDATE aws.batch.service_environments
SET 
serviceEnvironment = '{{ serviceEnvironment }}',
state = '{{ state }}',
capacityLimits = '{{ capacityLimits }}'
WHERE 
region = '{{ region }}' --required
AND serviceEnvironment = '{{ serviceEnvironment }}' --required
RETURNING
service_environment_arn,
service_environment_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_environment"
    values={[
        { label: 'delete_service_environment', value: 'delete_service_environment' }
    ]}
>
<TabItem value="delete_service_environment">

Deletes a Service environment. Before you can delete a service environment, you must first set its state to DISABLED with the UpdateServiceEnvironment API operation and disassociate it from any job queues with the UpdateJobQueue API operation.

```sql
DELETE FROM aws.batch.service_environments
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
