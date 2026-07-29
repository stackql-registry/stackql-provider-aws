--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - mq
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mq.users" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_user"
    values={[
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="describe_user">

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
    <td><CopyableCode code="broker_id" /></td>
    <td><code>string</code></td>
    <td>Required. The unique ID that Amazon MQ generates for the broker.</td>
</tr>
<tr>
    <td><CopyableCode code="console_access" /></td>
    <td><code>boolean</code></td>
    <td>Enables access to the the ActiveMQ Web Console for the ActiveMQ user.</td>
</tr>
<tr>
    <td><CopyableCode code="groups" /></td>
    <td><code>array</code></td>
    <td>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</td>
</tr>
<tr>
    <td><CopyableCode code="pending" /></td>
    <td><code>object</code></td>
    <td>The status of the changes pending for the ActiveMQ user.</td>
</tr>
<tr>
    <td><CopyableCode code="replication_user" /></td>
    <td><code>boolean</code></td>
    <td>Describes whether the user is intended for data replication</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_users">

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
    <td><CopyableCode code="broker_id" /></td>
    <td><code>string</code></td>
    <td>Required. The unique ID that Amazon MQ generates for the broker.</td>
</tr>
<tr>
    <td><CopyableCode code="max_results" /></td>
    <td><code>integer</code></td>
    <td>Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</td>
</tr>
<tr>
    <td><CopyableCode code="users" /></td>
    <td><code>array</code></td>
    <td>Required. The list of all ActiveMQ usernames for the specified broker. Does not apply to RabbitMQ brokers.</td>
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
    <td><a href="#describe_user"><CopyableCode code="describe_user" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-broker-id"><code>broker-id</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about an ActiveMQ user.</td>
</tr>
<tr>
    <td><a href="#list_users"><CopyableCode code="list_users" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-broker-id"><code>broker-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of all ActiveMQ users.</td>
</tr>
<tr>
    <td><a href="#create_user"><CopyableCode code="create_user" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-broker-id"><code>broker-id</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Password"><code>Password</code></a></td>
    <td></td>
    <td>Creates an ActiveMQ user. Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data.</td>
</tr>
<tr>
    <td><a href="#update_user"><CopyableCode code="update_user" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-broker-id"><code>broker-id</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the information for an ActiveMQ user.</td>
</tr>
<tr>
    <td><a href="#delete_user"><CopyableCode code="delete_user" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-broker-id"><code>broker-id</code></a>, <a href="#parameter-username"><code>username</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an ActiveMQ user.</td>
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
<tr id="parameter-broker-id">
    <td><CopyableCode code="broker-id" /></td>
    <td><code>string</code></td>
    <td>The unique ID that Amazon MQ generates for the broker.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-username">
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_user"
    values={[
        { label: 'describe_user', value: 'describe_user' },
        { label: 'list_users', value: 'list_users' }
    ]}
>
<TabItem value="describe_user">

Returns information about an ActiveMQ user.

```sql
SELECT
broker_id,
console_access,
groups,
pending,
replication_user,
username
FROM aws.mq.users
WHERE `broker-id` = '{{ broker-id }}' -- required
AND username = '{{ username }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_users">

Returns a list of all ActiveMQ users.

```sql
SELECT
broker_id,
max_results,
next_token,
users
FROM aws.mq.users
WHERE `broker-id` = '{{ broker-id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user"
    values={[
        { label: 'create_user', value: 'create_user' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user">

Creates an ActiveMQ user. Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data.

```sql
INSERT INTO aws.mq.users (
ConsoleAccess,
Groups,
Password,
ReplicationUser,
`broker-id`,
username,
region
)
SELECT 
{{ ConsoleAccess }},
'{{ Groups }}',
'{{ Password }}' /* required */,
{{ ReplicationUser }},
'{{ broker-id }}',
'{{ username }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: broker-id
      value: "{{ broker-id }}"
      description: Required parameter for the users resource.
    - name: username
      value: "{{ username }}"
      description: Required parameter for the users resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the users resource.
    - name: ConsoleAccess
      value: {{ ConsoleAccess }}
    - name: Groups
      value:
        - "{{ Groups }}"
    - name: Password
      value: "{{ Password }}"
    - name: ReplicationUser
      value: {{ ReplicationUser }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_user"
    values={[
        { label: 'update_user', value: 'update_user' }
    ]}
>
<TabItem value="update_user">

Updates the information for an ActiveMQ user.

```sql
UPDATE aws.mq.users
SET 
ConsoleAccess = {{ ConsoleAccess }},
Groups = '{{ Groups }}',
Password = '{{ Password }}',
ReplicationUser = {{ ReplicationUser }}
WHERE 
`broker-id` = '{{ broker-id }}' --required
AND username = '{{ username }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user"
    values={[
        { label: 'delete_user', value: 'delete_user' }
    ]}
>
<TabItem value="delete_user">

Deletes an ActiveMQ user.

```sql
DELETE FROM aws.mq.users
WHERE `broker-id` = '{{ broker-id }}' --required
AND username = '{{ username }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
