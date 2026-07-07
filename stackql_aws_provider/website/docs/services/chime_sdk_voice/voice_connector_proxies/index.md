--- 
title: voice_connector_proxies
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_connector_proxies
  - chime_sdk_voice
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

Creates, updates, deletes, gets or lists a <code>voice_connector_proxies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_connector_proxies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.voice_connector_proxies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_voice_connector_proxy"
    values={[
        { label: 'get_voice_connector_proxy', value: 'get_voice_connector_proxy' }
    ]}
>
<TabItem value="get_voice_connector_proxy">

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
    <td><CopyableCode code="DefaultSessionExpiryMinutes" /></td>
    <td><code>integer</code></td>
    <td>The default number of minutes allowed for proxy sessions.</td>
</tr>
<tr>
    <td><CopyableCode code="Disabled" /></td>
    <td><code>boolean</code></td>
    <td>When true, stops proxy sessions from being created on the specified Amazon Chime SDK Voice Connector.</td>
</tr>
<tr>
    <td><CopyableCode code="FallBackPhoneNumber" /></td>
    <td><code>string</code></td>
    <td>The phone number to route calls to after a proxy session expires. (pattern: &lt;code&gt;^\+?&#91;1-9&#93;\d&#123;1,14&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumberCountries" /></td>
    <td><code>array</code></td>
    <td>The countries for proxy phone numbers to be selected from.</td>
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
    <td><a href="#get_voice_connector_proxy"><CopyableCode code="get_voice_connector_proxy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the proxy configuration details for the specified Amazon Chime SDK Voice Connector.</td>
</tr>
<tr>
    <td><a href="#put_voice_connector_proxy"><CopyableCode code="put_voice_connector_proxy" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DefaultSessionExpiryMinutes"><code>DefaultSessionExpiryMinutes</code></a>, <a href="#parameter-PhoneNumberPoolCountries"><code>PhoneNumberPoolCountries</code></a></td>
    <td></td>
    <td>Puts the specified proxy configuration to the specified Amazon Chime SDK Voice Connector.</td>
</tr>
<tr>
    <td><a href="#delete_voice_connector_proxy"><CopyableCode code="delete_voice_connector_proxy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-voice_connector_id"><code>voice_connector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the proxy configuration from the specified Amazon Chime SDK Voice Connector.</td>
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
<tr id="parameter-voice_connector_id">
    <td><CopyableCode code="voice_connector_id" /></td>
    <td><code>string</code></td>
    <td>The Voice Connector ID.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_voice_connector_proxy"
    values={[
        { label: 'get_voice_connector_proxy', value: 'get_voice_connector_proxy' }
    ]}
>
<TabItem value="get_voice_connector_proxy">

Retrieves the proxy configuration details for the specified Amazon Chime SDK Voice Connector.

```sql
SELECT
DefaultSessionExpiryMinutes,
Disabled,
FallBackPhoneNumber,
PhoneNumberCountries
FROM aws.chime_sdk_voice.voice_connector_proxies
WHERE voice_connector_id = '{{ voice_connector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_voice_connector_proxy"
    values={[
        { label: 'put_voice_connector_proxy', value: 'put_voice_connector_proxy' }
    ]}
>
<TabItem value="put_voice_connector_proxy">

Puts the specified proxy configuration to the specified Amazon Chime SDK Voice Connector.

```sql
REPLACE aws.chime_sdk_voice.voice_connector_proxies
SET 
DefaultSessionExpiryMinutes = {{ DefaultSessionExpiryMinutes }},
PhoneNumberPoolCountries = '{{ PhoneNumberPoolCountries }}',
FallBackPhoneNumber = '{{ FallBackPhoneNumber }}',
Disabled = {{ Disabled }}
WHERE 
voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
AND DefaultSessionExpiryMinutes = '{{ DefaultSessionExpiryMinutes }}' --required
AND PhoneNumberPoolCountries = '{{ PhoneNumberPoolCountries }}' --required
RETURNING
Proxy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_voice_connector_proxy"
    values={[
        { label: 'delete_voice_connector_proxy', value: 'delete_voice_connector_proxy' }
    ]}
>
<TabItem value="delete_voice_connector_proxy">

Deletes the proxy configuration from the specified Amazon Chime SDK Voice Connector.

```sql
DELETE FROM aws.chime_sdk_voice.voice_connector_proxies
WHERE voice_connector_id = '{{ voice_connector_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
