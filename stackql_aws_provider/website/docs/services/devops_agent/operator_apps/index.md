--- 
title: operator_apps
hide_title: false
hide_table_of_contents: false
keywords:
  - operator_apps
  - devops_agent
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

Creates, updates, deletes, gets or lists an <code>operator_apps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="operator_apps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.operator_apps" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_operator_app"
    values={[
        { label: 'get_operator_app', value: 'get_operator_app' }
    ]}
>
<TabItem value="get_operator_app">

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
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>Configuration for IAM-based authentication flow for the Operator App.</td>
</tr>
<tr>
    <td><CopyableCode code="idc" /></td>
    <td><code>object</code></td>
    <td>Configuration for AWS Identity Center (IdC) authentication flow for the Operator App.</td>
</tr>
<tr>
    <td><CopyableCode code="idp" /></td>
    <td><code>object</code></td>
    <td>Configuration for external Identity Provider OIDC authentication flow for the Operator App.</td>
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
    <td><a href="#get_operator_app"><CopyableCode code="get_operator_app" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the full auth configuration of operator including any enabled auth flow</td>
</tr>
<tr>
    <td><a href="#update_operator_app_idp_config"><CopyableCode code="update_operator_app_idp_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_space_id"><code>agent_space_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update the external Identity Provider configuration for the Operator App</td>
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
<tr id="parameter-agent_space_id">
    <td><CopyableCode code="agent_space_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the AgentSpace</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_operator_app"
    values={[
        { label: 'get_operator_app', value: 'get_operator_app' }
    ]}
>
<TabItem value="get_operator_app">

Get the full auth configuration of operator including any enabled auth flow

```sql
SELECT
iam,
idc,
idp
FROM aws.devops_agent.operator_apps
WHERE agent_space_id = '{{ agent_space_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_operator_app_idp_config"
    values={[
        { label: 'update_operator_app_idp_config', value: 'update_operator_app_idp_config' }
    ]}
>
<TabItem value="update_operator_app_idp_config">

Update the external Identity Provider configuration for the Operator App

```sql
UPDATE aws.devops_agent.operator_apps
SET 
idpClientSecret = '{{ idpClientSecret }}'
WHERE 
agent_space_id = '{{ agent_space_id }}' --required
AND region = '{{ region }}' --required
RETURNING
agentSpaceId,
idp;
```
</TabItem>
</Tabs>
