--- 
title: app_instance_users
hide_title: false
hide_table_of_contents: false
keywords:
  - app_instance_users
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

Creates, updates, deletes, gets or lists an <code>app_instance_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="app_instance_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_identity.app_instance_users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_app_instance_users"
    values={[
        { label: 'list_app_instance_users', value: 'list_app_instance_users' },
        { label: 'describe_app_instance_user', value: 'describe_app_instance_user' }
    ]}
>
<TabItem value="list_app_instance_users">

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
    <td><CopyableCode code="app_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstance. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="app_instance_users" /></td>
    <td><code>array</code></td>
    <td>The information for each requested AppInstanceUser.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested users are returned. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="describe_app_instance_user">

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
    <td><CopyableCode code="app_instance_user_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstanceUser. (pattern: &lt;code&gt;arn:&#91;a-z0-9-\.&#93;&#123;1,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;a-z0-9-\.&#93;&#123;0,63&#125;:&#91;^/&#93;.&#123;0,1023&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the AppInstanceUser was created.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_settings" /></td>
    <td><code>object</code></td>
    <td>Determines the interval after which an AppInstanceUser is automatically deleted.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the AppInstanceUser was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>string</code></td>
    <td>The metadata of the AppInstanceUser. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the AppInstanceUser. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#list_app_instance_users"><CopyableCode code="list_app_instance_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app-instance-arn"><code>app-instance-arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-max-results"><code>max-results</code></a>, <a href="#parameter-next-token"><code>next-token</code></a></td>
    <td>List all AppInstanceUsers created under a single AppInstance.</td>
</tr>
<tr>
    <td><a href="#describe_app_instance_user"><CopyableCode code="describe_app_instance_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-app_instance_user_arn"><code>app_instance_user_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the full details of an AppInstanceUser.</td>
</tr>
<tr>
    <td><a href="#create_app_instance_user"><CopyableCode code="create_app_instance_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-AppInstanceArn"><code>AppInstanceArn</code></a>, <a href="#parameter-AppInstanceUserId"><code>AppInstanceUserId</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ClientRequestToken"><code>ClientRequestToken</code></a></td>
    <td></td>
    <td>Creates a user under an Amazon Chime AppInstance. The request consists of a unique appInstanceUserId and Name for that user.</td>
</tr>
<tr>
    <td><a href="#update_app_instance_user"><CopyableCode code="update_app_instance_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-app_instance_user_arn"><code>app_instance_user_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Metadata"><code>Metadata</code></a></td>
    <td></td>
    <td>Updates the details of an AppInstanceUser. You can update names and metadata.</td>
</tr>
<tr>
    <td><a href="#put_app_instance_user_expiration_settings"><CopyableCode code="put_app_instance_user_expiration_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-app_instance_user_arn"><code>app_instance_user_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Sets the number of days before the AppInstanceUser is automatically deleted. A background process deletes expired AppInstanceUsers within 6 hours of expiration. Actual deletion times may vary. Expired AppInstanceUsers that have not yet been deleted appear as active, and you can update their expiration settings. The system honors the new settings.</td>
</tr>
<tr>
    <td><a href="#delete_app_instance_user"><CopyableCode code="delete_app_instance_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-app_instance_user_arn"><code>app_instance_user_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an AppInstanceUser.</td>
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
<tr id="parameter-app-instance-arn">
    <td><CopyableCode code="app-instance-arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the AppInstance.</td>
</tr>
<tr id="parameter-app_instance_user_arn">
    <td><CopyableCode code="app_instance_user_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user request being deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of requests that you want returned.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token passed by previous API calls until all requested users are returned.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_app_instance_users"
    values={[
        { label: 'list_app_instance_users', value: 'list_app_instance_users' },
        { label: 'describe_app_instance_user', value: 'describe_app_instance_user' }
    ]}
>
<TabItem value="list_app_instance_users">

List all AppInstanceUsers created under a single AppInstance.

```sql
SELECT
app_instance_arn,
app_instance_users,
next_token
FROM aws.chime_sdk_identity.app_instance_users
WHERE `app-instance-arn` = '{{ app-instance-arn }}' -- required
AND region = '{{ region }}' -- required
AND `max-results` = '{{ max-results }}'
AND `next-token` = '{{ next-token }}'
;
```
</TabItem>
<TabItem value="describe_app_instance_user">

Returns the full details of an AppInstanceUser.

```sql
SELECT
app_instance_user_arn,
created_timestamp,
expiration_settings,
last_updated_timestamp,
metadata,
name
FROM aws.chime_sdk_identity.app_instance_users
WHERE app_instance_user_arn = '{{ app_instance_user_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_app_instance_user"
    values={[
        { label: 'create_app_instance_user', value: 'create_app_instance_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_app_instance_user">

Creates a user under an Amazon Chime AppInstance. The request consists of a unique appInstanceUserId and Name for that user.

```sql
INSERT INTO aws.chime_sdk_identity.app_instance_users (
AppInstanceArn,
AppInstanceUserId,
Name,
Metadata,
ClientRequestToken,
Tags,
ExpirationSettings,
region
)
SELECT 
'{{ AppInstanceArn }}' /* required */,
'{{ AppInstanceUserId }}' /* required */,
'{{ Name }}' /* required */,
'{{ Metadata }}',
'{{ ClientRequestToken }}' /* required */,
'{{ Tags }}',
'{{ ExpirationSettings }}',
'{{ region }}'
RETURNING
app_instance_user_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: app_instance_users
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the app_instance_users resource.
    - name: AppInstanceArn
      value: "{{ AppInstanceArn }}"
    - name: AppInstanceUserId
      value: "{{ AppInstanceUserId }}"
    - name: Name
      value: "{{ Name }}"
    - name: Metadata
      value: "{{ Metadata }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ExpirationSettings
      description: |
        Determines the interval after which an AppInstanceUser is automatically deleted.
      value:
        ExpirationDays: {{ ExpirationDays }}
        ExpirationCriterion: "{{ ExpirationCriterion }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_app_instance_user"
    values={[
        { label: 'update_app_instance_user', value: 'update_app_instance_user' }
    ]}
>
<TabItem value="update_app_instance_user">

Updates the details of an AppInstanceUser. You can update names and metadata.

```sql
UPDATE aws.chime_sdk_identity.app_instance_users
SET 
Name = '{{ Name }}',
Metadata = '{{ Metadata }}'
WHERE 
app_instance_user_arn = '{{ app_instance_user_arn }}' --required
AND region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Metadata = '{{ Metadata }}' --required
RETURNING
app_instance_user_arn;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_app_instance_user_expiration_settings"
    values={[
        { label: 'put_app_instance_user_expiration_settings', value: 'put_app_instance_user_expiration_settings' }
    ]}
>
<TabItem value="put_app_instance_user_expiration_settings">

Sets the number of days before the AppInstanceUser is automatically deleted. A background process deletes expired AppInstanceUsers within 6 hours of expiration. Actual deletion times may vary. Expired AppInstanceUsers that have not yet been deleted appear as active, and you can update their expiration settings. The system honors the new settings.

```sql
REPLACE aws.chime_sdk_identity.app_instance_users
SET 
ExpirationSettings = '{{ ExpirationSettings }}'
WHERE 
app_instance_user_arn = '{{ app_instance_user_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
app_instance_user_arn,
expiration_settings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_app_instance_user"
    values={[
        { label: 'delete_app_instance_user', value: 'delete_app_instance_user' }
    ]}
>
<TabItem value="delete_app_instance_user">

Deletes an AppInstanceUser.

```sql
DELETE FROM aws.chime_sdk_identity.app_instance_users
WHERE app_instance_user_arn = '{{ app_instance_user_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
