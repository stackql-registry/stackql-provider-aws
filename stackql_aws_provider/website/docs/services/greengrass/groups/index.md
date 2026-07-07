--- 
title: groups
hide_title: false
hide_table_of_contents: false
keywords:
  - groups
  - greengrass
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

Creates, updates, deletes, gets or lists a <code>groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.greengrass.groups" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="get_group">

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
    <td>The ARN of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the definition was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersion" /></td>
    <td><code>string</code></td>
    <td>The ID of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the latest version associated with the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the definition.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tag(s) attached to the resource arn.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_groups">

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
    <td>The ARN of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the group was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The ID of the group.</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string</code></td>
    <td>The time, in milliseconds since the epoch, when the group was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersion" /></td>
    <td><code>string</code></td>
    <td>The ID of the latest version associated with the group.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestVersionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the latest version associated with the group.</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name of the group.</td>
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
    <td><a href="#get_group"><CopyableCode code="get_group" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a group.</td>
</tr>
<tr>
    <td><a href="#list_groups"><CopyableCode code="list_groups" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Retrieves a list of groups.</td>
</tr>
<tr>
    <td><a href="#create_group"><CopyableCode code="create_group" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-Client-Token"><code>X-Amzn-Client-Token</code></a></td>
    <td>Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https:​//github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.</td>
</tr>
<tr>
    <td><a href="#associate_role_to_group"><CopyableCode code="associate_role_to_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RoleArn"><code>RoleArn</code></a></td>
    <td></td>
    <td>Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.</td>
</tr>
<tr>
    <td><a href="#update_group"><CopyableCode code="update_group" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a group.</td>
</tr>
<tr>
    <td><a href="#delete_group"><CopyableCode code="delete_group" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a group.</td>
</tr>
<tr>
    <td><a href="#disassociate_role_from_group"><CopyableCode code="disassociate_role_from_group" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-group_id"><code>group_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the role from a group.</td>
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
<tr id="parameter-group_id">
    <td><CopyableCode code="group_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Greengrass group.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>string</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results, or ''null'' if there are no additional results.</td>
</tr>
<tr id="parameter-X-Amzn-Client-Token">
    <td><CopyableCode code="X-Amzn-Client-Token" /></td>
    <td><code>string</code></td>
    <td>A client token used to correlate requests and responses.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_group"
    values={[
        { label: 'get_group', value: 'get_group' },
        { label: 'list_groups', value: 'list_groups' }
    ]}
>
<TabItem value="get_group">

Retrieves information about a group.

```sql
SELECT
Arn,
CreationTimestamp,
Id,
LastUpdatedTimestamp,
LatestVersion,
LatestVersionArn,
Name,
tags
FROM aws.greengrass.groups
WHERE group_id = '{{ group_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_groups">

Retrieves a list of groups.

```sql
SELECT
Arn,
CreationTimestamp,
Id,
LastUpdatedTimestamp,
LatestVersion,
LatestVersionArn,
Name
FROM aws.greengrass.groups
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_group"
    values={[
        { label: 'create_group', value: 'create_group' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_group">

Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.

```sql
INSERT INTO aws.greengrass.groups (
InitialVersion,
Name,
tags,
region,
`X-Amzn-Client-Token`
)
SELECT 
'{{ InitialVersion }}',
'{{ Name }}',
'{{ tags }}',
'{{ region }}',
'{{ X-Amzn-Client-Token }}'
RETURNING
Arn,
CreationTimestamp,
Id,
LastUpdatedTimestamp,
LatestVersion,
LatestVersionArn,
Name
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: groups
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the groups resource.
    - name: InitialVersion
      description: |
        Information about a group version.
      value:
        ConnectorDefinitionVersionArn: "{{ ConnectorDefinitionVersionArn }}"
        CoreDefinitionVersionArn: "{{ CoreDefinitionVersionArn }}"
        DeviceDefinitionVersionArn: "{{ DeviceDefinitionVersionArn }}"
        FunctionDefinitionVersionArn: "{{ FunctionDefinitionVersionArn }}"
        LoggerDefinitionVersionArn: "{{ LoggerDefinitionVersionArn }}"
        ResourceDefinitionVersionArn: "{{ ResourceDefinitionVersionArn }}"
        SubscriptionDefinitionVersionArn: "{{ SubscriptionDefinitionVersionArn }}"
    - name: Name
      value: "{{ Name }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        The key-value pair for the resource tag.
    - name: X-Amzn-Client-Token
      value: "{{ X-Amzn-Client-Token }}"
      description: A client token used to correlate requests and responses.
      description: A client token used to correlate requests and responses.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_role_to_group"
    values={[
        { label: 'associate_role_to_group', value: 'associate_role_to_group' },
        { label: 'update_group', value: 'update_group' }
    ]}
>
<TabItem value="associate_role_to_group">

Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.

```sql
UPDATE aws.greengrass.groups
SET 
RoleArn = '{{ RoleArn }}'
WHERE 
group_id = '{{ group_id }}' --required
AND region = '{{ region }}' --required
AND RoleArn = '{{ RoleArn }}' --required
RETURNING
AssociatedAt;
```
</TabItem>
<TabItem value="update_group">

Updates a group.

```sql
UPDATE aws.greengrass.groups
SET 
Name = '{{ Name }}'
WHERE 
group_id = '{{ group_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_group"
    values={[
        { label: 'delete_group', value: 'delete_group' }
    ]}
>
<TabItem value="delete_group">

Deletes a group.

```sql
DELETE FROM aws.greengrass.groups
WHERE group_id = '{{ group_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_role_from_group"
    values={[
        { label: 'disassociate_role_from_group', value: 'disassociate_role_from_group' }
    ]}
>
<TabItem value="disassociate_role_from_group">

Disassociates the role from a group.

```sql
EXEC aws.greengrass.groups.disassociate_role_from_group 
@group_id='{{ group_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
