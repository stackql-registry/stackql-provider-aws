--- 
title: relays
hide_title: false
hide_table_of_contents: false
keywords:
  - relays
  - mailmanager
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

Creates, updates, deletes, gets or lists a <code>relays</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="relays" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.relays" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_relay"
    values={[
        { label: 'get_relay', value: 'get_relay' },
        { label: 'list_relays', value: 'list_relays' }
    ]}
>
<TabItem value="get_relay">

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
    <td><CopyableCode code="authentication" /></td>
    <td><code>object</code></td>
    <td>The authentication attribute—contains the secret ARN where the customer relay server credentials are stored.</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the relay was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when relay was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="relay_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the relay.</td>
</tr>
<tr>
    <td><CopyableCode code="relay_id" /></td>
    <td><code>string</code></td>
    <td>The unique relay identifier. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="relay_name" /></td>
    <td><code>string</code></td>
    <td>The unique name of the relay. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_name" /></td>
    <td><code>string</code></td>
    <td>The destination relay server address. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-\.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_port" /></td>
    <td><code>integer</code></td>
    <td>The destination relay server port.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_relays">

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
    <td><CopyableCode code="last_modified_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the relay was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="relay_id" /></td>
    <td><code>string</code></td>
    <td>The unique relay identifier. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="relay_name" /></td>
    <td><code>string</code></td>
    <td>The unique relay name. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_relay"><CopyableCode code="get_relay" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Fetch the relay resource and it's attributes.</td>
</tr>
<tr>
    <td><a href="#list_relays"><CopyableCode code="list_relays" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the existing relay resources.</td>
</tr>
<tr>
    <td><a href="#create_relay"><CopyableCode code="create_relay" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RelayName"><code>RelayName</code></a>, <a href="#parameter-ServerName"><code>ServerName</code></a>, <a href="#parameter-ServerPort"><code>ServerPort</code></a></td>
    <td></td>
    <td>Creates a relay resource which can be used in rules to relay incoming emails to defined relay destinations.</td>
</tr>
<tr>
    <td><a href="#update_relay"><CopyableCode code="update_relay" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RelayId"><code>RelayId</code></a></td>
    <td></td>
    <td>Updates the attributes of an existing relay resource.</td>
</tr>
<tr>
    <td><a href="#delete_relay"><CopyableCode code="delete_relay" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing relay resource.</td>
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
    defaultValue="get_relay"
    values={[
        { label: 'get_relay', value: 'get_relay' },
        { label: 'list_relays', value: 'list_relays' }
    ]}
>
<TabItem value="get_relay">

Fetch the relay resource and it's attributes.

```sql
SELECT
authentication,
created_timestamp,
last_modified_timestamp,
relay_arn,
relay_id,
relay_name,
server_name,
server_port
FROM aws.mailmanager.relays
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_relays">

Lists all the existing relay resources.

```sql
SELECT
last_modified_timestamp,
relay_id,
relay_name
FROM aws.mailmanager.relays
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_relay"
    values={[
        { label: 'create_relay', value: 'create_relay' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_relay">

Creates a relay resource which can be used in rules to relay incoming emails to defined relay destinations.

```sql
INSERT INTO aws.mailmanager.relays (
ClientToken,
RelayName,
ServerName,
ServerPort,
Authentication,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ RelayName }}' /* required */,
'{{ ServerName }}' /* required */,
{{ ServerPort }} /* required */,
'{{ Authentication }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
relay_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: relays
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the relays resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique token that Amazon SES uses to recognize subsequent retries of the same request.
    - name: RelayName
      value: "{{ RelayName }}"
      description: |
        The unique name of the relay resource.
    - name: ServerName
      value: "{{ ServerName }}"
      description: |
        The destination relay server address.
    - name: ServerPort
      value: {{ ServerPort }}
      description: |
        The destination relay server port.
    - name: Authentication
      description: |
        Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored.
      value:
        SecretArn: "{{ SecretArn }}"
        NoAuthentication: "{{ NoAuthentication }}"
    - name: Tags
      description: |
        The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_relay"
    values={[
        { label: 'update_relay', value: 'update_relay' }
    ]}
>
<TabItem value="update_relay">

Updates the attributes of an existing relay resource.

```sql
UPDATE aws.mailmanager.relays
SET 
RelayId = '{{ RelayId }}',
RelayName = '{{ RelayName }}',
ServerName = '{{ ServerName }}',
ServerPort = {{ ServerPort }},
Authentication = '{{ Authentication }}'
WHERE 
region = '{{ region }}' --required
AND RelayId = '{{ RelayId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_relay"
    values={[
        { label: 'delete_relay', value: 'delete_relay' }
    ]}
>
<TabItem value="delete_relay">

Deletes an existing relay resource.

```sql
DELETE FROM aws.mailmanager.relays
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
