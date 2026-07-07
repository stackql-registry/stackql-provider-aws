--- 
title: container_agents
hide_title: false
hide_table_of_contents: false
keywords:
  - container_agents
  - ecs
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

Creates, updates, deletes, gets or lists a <code>container_agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ecs.container_agents" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#update_container_agent"><CopyableCode code="update_container_agent" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-containerInstance"><code>containerInstance</code></a></td>
    <td></td>
    <td>Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent doesn't interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system. The UpdateContainerAgent API isn't supported for container instances using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent, you can update the ecs-init package. This updates the agent. For more information, see Updating the Amazon ECS container agent in the Amazon Elastic Container Service Developer Guide. Agent updates with the UpdateContainerAgent API operation do not apply to Windows container instances. We recommend that you launch new container instances to update the agent version in your Windows clusters. The UpdateContainerAgent API requires an Amazon ECS-optimized AMI or Amazon Linux AMI with the ecs-init service installed and running. For help updating the Amazon ECS container agent on other operating systems, see Manually updating the Amazon ECS container agent in the Amazon Elastic Container Service Developer Guide.</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="update_container_agent"
    values={[
        { label: 'update_container_agent', value: 'update_container_agent' }
    ]}
>
<TabItem value="update_container_agent">

Updates the Amazon ECS container agent on a specified container instance. Updating the Amazon ECS container agent doesn't interrupt running tasks or services on the container instance. The process for updating the agent differs depending on whether your container instance was launched with the Amazon ECS-optimized AMI or another operating system. The UpdateContainerAgent API isn't supported for container instances using the Amazon ECS-optimized Amazon Linux 2 (arm64) AMI. To update the container agent, you can update the ecs-init package. This updates the agent. For more information, see Updating the Amazon ECS container agent in the Amazon Elastic Container Service Developer Guide. Agent updates with the UpdateContainerAgent API operation do not apply to Windows container instances. We recommend that you launch new container instances to update the agent version in your Windows clusters. The UpdateContainerAgent API requires an Amazon ECS-optimized AMI or Amazon Linux AMI with the ecs-init service installed and running. For help updating the Amazon ECS container agent on other operating systems, see Manually updating the Amazon ECS container agent in the Amazon Elastic Container Service Developer Guide.

```sql
UPDATE aws.ecs.container_agents
SET 
cluster = '{{ cluster }}',
containerInstance = '{{ containerInstance }}'
WHERE 
region = '{{ region }}' --required
AND containerInstance = '{{ containerInstance }}' --required
RETURNING
containerInstance;
```
</TabItem>
</Tabs>
