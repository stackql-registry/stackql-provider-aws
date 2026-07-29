--- 
title: alias
hide_title: false
hide_table_of_contents: false
keywords:
  - alias
  - gamelift
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

Creates, updates, deletes, gets or lists an <code>alias</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alias" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.gamelift.alias" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_alias"
    values={[
        { label: 'describe_alias', value: 'describe_alias' }
    ]}
>
<TabItem value="describe_alias">

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
    <td><CopyableCode code="alias_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift Servers alias resource and uniquely identifies it. ARNs are unique across all Regions. Format is arn:aws:gamelift:<code>&lt;region&gt;</code>::alias/alias-a1234567-b8c9-0d1e-2fa3-b45c6d7e8912. In a GameLift alias ARN, the resource ID matches the alias ID value. (pattern: &lt;code&gt;^arn:.*:alias\/alias-\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="alias_id" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for the alias. Alias IDs are unique within a Region. (pattern: &lt;code&gt;^alias-\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A human-readable description of an alias.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time that this data object was last modified. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>A descriptive label that is associated with an alias. Alias names do not need to be unique. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="routing_strategy" /></td>
    <td><code>object</code></td>
    <td>The routing configuration, including routing type and fleet target, for the alias.</td>
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
    <td><a href="#describe_alias"><CopyableCode code="describe_alias" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use ResolveAlias. To get alias properties, specify the alias ID. If successful, the requested alias record is returned. Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#create_alias"><CopyableCode code="create_alias" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-RoutingStrategy"><code>RoutingStrategy</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build. Amazon GameLift Servers supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling UpdateAlias. Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#update_alias"><CopyableCode code="update_alias" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AliasId"><code>AliasId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Updates properties for an alias. Specify the unique identifier of the alias to be updated and the new property values. When reassigning an alias to a new fleet, provide an updated routing strategy. If successful, the updated alias record is returned. Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#delete_alias"><CopyableCode code="delete_alias" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted. Related actions All APIs by task</td>
</tr>
<tr>
    <td><a href="#resolve_alias"><CopyableCode code="resolve_alias" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AliasId"><code>AliasId</code></a></td>
    <td></td>
    <td>This API works with the following fleet types: EC2, Anywhere, Container Attempts to retrieve a fleet ID that is associated with an alias. Specify a unique alias identifier. If the alias has a SIMPLE routing strategy, Amazon GameLift Servers returns a fleet ID. If the alias has a TERMINAL routing strategy, the result is a TerminalRoutingStrategyException. Related actions All APIs by task</td>
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
    defaultValue="describe_alias"
    values={[
        { label: 'describe_alias', value: 'describe_alias' }
    ]}
>
<TabItem value="describe_alias">

This API works with the following fleet types: EC2, Anywhere, Container Retrieves properties for an alias. This operation returns all alias metadata and settings. To get an alias's target fleet ID only, use ResolveAlias. To get alias properties, specify the alias ID. If successful, the requested alias record is returned. Related actions All APIs by task

```sql
SELECT
alias_arn,
alias_id,
creation_time,
description,
last_updated_time,
name,
routing_strategy
FROM aws.gamelift.alias
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_alias"
    values={[
        { label: 'create_alias', value: 'create_alias' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_alias">

This API works with the following fleet types: EC2, Anywhere, Container Creates an alias for a fleet. In most situations, you can use an alias ID in place of a fleet ID. An alias provides a level of abstraction for a fleet that is useful when redirecting player traffic from one fleet to another, such as when updating your game build. Amazon GameLift Servers supports two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias is used to display messaging or link to a URL instead of routing players to an active fleet. For example, you might use a terminal alias when a game version is no longer supported and you want to direct players to an upgrade site. To create a fleet alias, specify an alias name, routing strategy, and optional description. Each simple alias can point to only one fleet, but a fleet can have multiple aliases. If successful, a new alias record is returned, including an alias ID and an ARN. You can reassign an alias to another fleet by calling UpdateAlias. Related actions All APIs by task

```sql
INSERT INTO aws.gamelift.alias (
Name,
Description,
RoutingStrategy,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ RoutingStrategy }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
alias
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: alias
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the alias resource.
    - name: Name
      value: "{{ Name }}"
      description: |
        A descriptive label that is associated with an alias. Alias names do not need to be unique.
    - name: Description
      value: "{{ Description }}"
      description: |
        A human-readable description of the alias.
    - name: RoutingStrategy
      description: |
        The routing configuration, including routing type and fleet target, for the alias.
      value:
        Type: "{{ Type }}"
        FleetId: "{{ FleetId }}"
        Message: "{{ Message }}"
    - name: Tags
      description: |
        A list of labels to assign to the new alias resource. Tags are developer-defined key-value pairs. Tagging Amazon Web Services resources are useful for resource management, access management and cost allocation. For more information, see Tagging Amazon Web Services Resources in the Amazon Web Services General Reference.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_alias"
    values={[
        { label: 'update_alias', value: 'update_alias' }
    ]}
>
<TabItem value="update_alias">

This API works with the following fleet types: EC2, Anywhere, Container Updates properties for an alias. Specify the unique identifier of the alias to be updated and the new property values. When reassigning an alias to a new fleet, provide an updated routing strategy. If successful, the updated alias record is returned. Related actions All APIs by task

```sql
UPDATE aws.gamelift.alias
SET 
AliasId = '{{ AliasId }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
RoutingStrategy = '{{ RoutingStrategy }}'
WHERE 
region = '{{ region }}' --required
AND AliasId = '{{ AliasId }}' --required
RETURNING
alias;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_alias"
    values={[
        { label: 'delete_alias', value: 'delete_alias' }
    ]}
>
<TabItem value="delete_alias">

This API works with the following fleet types: EC2, Anywhere, Container Deletes an alias. This operation removes all record of the alias. Game clients attempting to access a server process using the deleted alias receive an error. To delete an alias, specify the alias ID to be deleted. Related actions All APIs by task

```sql
DELETE FROM aws.gamelift.alias
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="resolve_alias"
    values={[
        { label: 'resolve_alias', value: 'resolve_alias' }
    ]}
>
<TabItem value="resolve_alias">

This API works with the following fleet types: EC2, Anywhere, Container Attempts to retrieve a fleet ID that is associated with an alias. Specify a unique alias identifier. If the alias has a SIMPLE routing strategy, Amazon GameLift Servers returns a fleet ID. If the alias has a TERMINAL routing strategy, the result is a TerminalRoutingStrategyException. Related actions All APIs by task

```sql
EXEC aws.gamelift.alias.resolve_alias 
@region='{{ region }}' --required 
@@json=
'{
"AliasId": "{{ AliasId }}"
}'
;
```
</TabItem>
</Tabs>
