--- 
title: authentication_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - authentication_urls
  - connectparticipant
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

Creates, updates, deletes, gets or lists an <code>authentication_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="authentication_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectparticipant.authentication_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_authentication_url"
    values={[
        { label: 'get_authentication_url', value: 'get_authentication_url' }
    ]}
>
<TabItem value="get_authentication_url">

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
    <td><CopyableCode code="AuthenticationUrl" /></td>
    <td><code>string</code></td>
    <td>The URL where the customer will sign in to the identity provider. This URL contains the authorize endpoint for the Cognito UserPool used in the authentication.</td>
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
    <td><a href="#get_authentication_url"><CopyableCode code="get_authentication_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-X-Amz-Bearer"><code>X-Amz-Bearer</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the AuthenticationUrl for the current authentication session for the AuthenticateCustomer flow block. For security recommendations, see Amazon Connect Chat security best practices. This API can only be called within one minute of receiving the authenticationInitiated event. The current supported channel is chat. This API is not supported for Apple Messages for Business, WhatsApp, or SMS chats. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.</td>
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
<tr id="parameter-X-Amz-Bearer">
    <td><CopyableCode code="X-Amz-Bearer" /></td>
    <td><code>string</code></td>
    <td>The authentication token associated with the participant's connection.</td>
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
    defaultValue="get_authentication_url"
    values={[
        { label: 'get_authentication_url', value: 'get_authentication_url' }
    ]}
>
<TabItem value="get_authentication_url">

Retrieves the AuthenticationUrl for the current authentication session for the AuthenticateCustomer flow block. For security recommendations, see Amazon Connect Chat security best practices. This API can only be called within one minute of receiving the authenticationInitiated event. The current supported channel is chat. This API is not supported for Apple Messages for Business, WhatsApp, or SMS chats. ConnectionToken is used for invoking this API instead of ParticipantToken. The Amazon Connect Participant Service APIs do not use Signature Version 4 authentication.

```sql
SELECT
AuthenticationUrl
FROM aws.connectparticipant.authentication_urls
WHERE `X-Amz-Bearer` = '{{ X-Amz-Bearer }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
