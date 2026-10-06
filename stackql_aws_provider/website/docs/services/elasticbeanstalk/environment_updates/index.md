--- 
title: environment_updates
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_updates
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

Creates, updates, deletes, gets or lists an <code>environment_updates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_updates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.environment_updates" /></td></tr>
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
    <td><a href="#abort_environment_update"><CopyableCode code="abort_environment_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a></td>
    <td>Cancels in-progress environment configuration update or application version deployment.</td>
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
    <td>This specifies the ID of the environment with the in-progress update that you want to cancel.</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>This specifies the name of the environment with the in-progress update that you want to cancel.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="abort_environment_update"
    values={[
        { label: 'abort_environment_update', value: 'abort_environment_update' }
    ]}
>
<TabItem value="abort_environment_update">

Cancels in-progress environment configuration update or application version deployment.

```sql
EXEC aws.elasticbeanstalk.environment_updates.abort_environment_update 
@region='{{ region }}' --required, 
@EnvironmentId='{{ EnvironmentId }}', 
@EnvironmentName='{{ EnvironmentName }}'
;
```
</TabItem>
</Tabs>
