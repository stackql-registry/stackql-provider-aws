--- 
title: app_instance_admins
hide_title: false
hide_table_of_contents: false
keywords:
  - app_instance_admins
  - chime_sdk_identity
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

Creates, updates, deletes, gets or lists an <code>app_instance_admins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_instance_admins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_identity.app_instance_admins" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_app_instance_admin"
    values={[
        { label: 'describe_app_instance_admin', value: 'describe_app_instance_admin' },
        { label: 'list_app_instance_admins', value: 'list_app_instance_admins' }
    ]}
>
<TabItem value="describe_app_instance_admin">

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
    <td><CopyableCode code="Admin" /></td>
    <td><code>object</code></td>
    <td>The AppInstanceAdmin data.</td>
</tr>
<tr>
    <td><CopyableCode code="AppInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstance for which the user is an administrator. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which an administrator was created.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_app_instance_admins">

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
    <td><CopyableCode code="AppInstanceAdmins" /></td>
    <td><code>array</code></td>
    <td>The information for each administrator.</td>
</tr>
<tr>
    <td><CopyableCode code="AppInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstance. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token returned from previous API requests until the number of administrators is reached. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td><a href="#describe_app_instance_admin"><CopyableCode code="describe_app_instance_admin" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_instance_admin_arn"><code>app_instance_admin_arn</code></a>, <a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the full details of an AppInstanceAdmin.</td>
</tr>
<tr>
    <td><a href="#list_app_instance_admins"><CopyableCode code="list_app_instance_admins" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>Returns a list of the administrators in the AppInstance.</td>
</tr>
<tr>
    <td><a href="#create_app_instance_admin"><CopyableCode code="create_app_instance_admin" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppInstanceAdminArn"><code>AppInstanceAdminArn</code></a></td>
    <td></td>
    <td>Promotes an AppInstanceUser or AppInstanceBot to an AppInstanceAdmin. The promoted entity can perform the following actions. ChannelModerator actions across all channels in the AppInstance. DeleteChannelMessage actions. Only an AppInstanceUser and AppInstanceBot can be promoted to an AppInstanceAdmin role.</td>
</tr>
<tr>
    <td><a href="#delete_app_instance_admin"><CopyableCode code="delete_app_instance_admin" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_instance_admin_arn"><code>app_instance_admin_arn</code></a>, <a href="#parameter-app_instance_arn"><code>app_instance_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Demotes an AppInstanceAdmin to an AppInstanceUser or AppInstanceBot. This action does not delete the user.</td>
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
<tr id="parameter-app_instance_admin_arn">
    <td><CopyableCode code="app_instance_admin_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstance's administrator.</td>
</tr>
<tr id="parameter-app_instance_arn">
    <td><CopyableCode code="app_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstance.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of administrators that you want to return.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token returned from previous API requests until the number of administrators is reached.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_app_instance_admin"
    values={[
        { label: 'describe_app_instance_admin', value: 'describe_app_instance_admin' },
        { label: 'list_app_instance_admins', value: 'list_app_instance_admins' }
    ]}
>
<TabItem value="describe_app_instance_admin">

Returns the full details of an AppInstanceAdmin.

```sql
SELECT
Admin,
AppInstanceArn,
CreatedTimestamp
FROM aws.chime_sdk_identity.app_instance_admins
WHERE app_instance_admin_arn = '{{ app_instance_admin_arn }}' -- required
AND app_instance_arn = '{{ app_instance_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_app_instance_admins">

Returns a list of the administrators in the AppInstance.

```sql
SELECT
AppInstanceAdmins,
AppInstanceArn,
NextToken
FROM aws.chime_sdk_identity.app_instance_admins
WHERE app_instance_arn = '{{ app_instance_arn }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_instance_admin"
    values={[
        { label: 'create_app_instance_admin', value: 'create_app_instance_admin' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_instance_admin">

Promotes an AppInstanceUser or AppInstanceBot to an AppInstanceAdmin. The promoted entity can perform the following actions. ChannelModerator actions across all channels in the AppInstance. DeleteChannelMessage actions. Only an AppInstanceUser and AppInstanceBot can be promoted to an AppInstanceAdmin role.

```sql
INSERT INTO aws.chime_sdk_identity.app_instance_admins (
AppInstanceAdminArn,
app_instance_arn,
region
)
SELECT 
'{{ AppInstanceAdminArn }}' /* required */,
'{{ app_instance_arn }}',
'{{ region }}'
RETURNING
AppInstanceAdmin,
AppInstanceArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_instance_admins
  props:
    - name: app_instance_arn
      value: "{{ app_instance_arn }}"
      description: Required parameter for the app_instance_admins resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_instance_admins resource.
    - name: AppInstanceAdminArn
      value: "{{ AppInstanceAdminArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_instance_admin"
    values={[
        { label: 'delete_app_instance_admin', value: 'delete_app_instance_admin' }
    ]}
>
<TabItem value="delete_app_instance_admin">

Demotes an AppInstanceAdmin to an AppInstanceUser or AppInstanceBot. This action does not delete the user.

```sql
DELETE FROM aws.chime_sdk_identity.app_instance_admins
WHERE app_instance_admin_arn = '{{ app_instance_admin_arn }}' --required
AND app_instance_arn = '{{ app_instance_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
