--- 
title: app_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - app_servers
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists an <code>app_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.app_servers" /></td></tr>
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
    <td><a href="#restart_app_server"><CopyableCode code="restart_app_server" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a></td>
    <td>Causes the environment to restart the application container server running on each Amazon EC2 instance.</td>
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
<tr id="parameter-EnvironmentId">
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment to restart the server for. Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, Elastic Beanstalk returns MissingRequiredParameter error.</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the environment to restart the server for. Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, Elastic Beanstalk returns MissingRequiredParameter error.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="restart_app_server"
    values={[
        { label: 'restart_app_server', value: 'restart_app_server' }
    ]}
>
<TabItem value="restart_app_server">

Causes the environment to restart the application container server running on each Amazon EC2 instance.

```sql
EXEC aws.elasticbeanstalk.app_servers.restart_app_server 
@region='{{ region }}' --required, 
@EnvironmentId='{{ EnvironmentId }}', 
@EnvironmentName='{{ EnvironmentName }}'
;
```
</TabItem>
</Tabs>
