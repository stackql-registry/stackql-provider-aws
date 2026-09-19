--- 
title: authorization_messages
hide_title: false
hide_table_of_contents: false
keywords:
  - authorization_messages
  - sts
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

Creates, updates, deletes, gets or lists an <code>authorization_messages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="authorization_messages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sts.authorization_messages" /></td></tr>
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
    <td><a href="#decode_authorization_message"><CopyableCode code="decode_authorization_message" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-EncodedMessage"><code>EncodedMessage</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Decodes additional information about the authorization status of a request from an encoded message returned in response to an Amazon Web Services request. For example, if a user is not authorized to perform an operation that he or she has requested, the request returns a Client.UnauthorizedOperation response (an HTTP 403 response). Some Amazon Web Services operations additionally return an encoded message that can provide details about this authorization failure. Only certain Amazon Web Services operations return an encoded authorization message. The documentation for an individual operation indicates whether that operation returns an encoded message in addition to returning an HTTP code. The message is encoded because the details of the authorization status can contain privileged information that the user who requested the operation should not see. To decode an authorization status message, a user must be granted permissions through an IAM policy to request the DecodeAuthorizationMessage (sts:DecodeAuthorizationMessage) action. The decoded message includes the following type of information: Whether the request was denied due to an explicit deny or due to the absence of an explicit allow. For more information, see Determining Whether a Request is Allowed or Denied in the IAM User Guide. The principal who made the request. The requested action. The requested resource. The values of condition keys in the context of the user's request.</td>
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
<tr id="parameter-EncodedMessage">
    <td><CopyableCode code="EncodedMessage" /></td>
    <td><code>string</code></td>
    <td>The encoded message that was returned with the response.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="decode_authorization_message"
    values={[
        { label: 'decode_authorization_message', value: 'decode_authorization_message' }
    ]}
>
<TabItem value="decode_authorization_message">

Decodes additional information about the authorization status of a request from an encoded message returned in response to an Amazon Web Services request. For example, if a user is not authorized to perform an operation that he or she has requested, the request returns a Client.UnauthorizedOperation response (an HTTP 403 response). Some Amazon Web Services operations additionally return an encoded message that can provide details about this authorization failure. Only certain Amazon Web Services operations return an encoded authorization message. The documentation for an individual operation indicates whether that operation returns an encoded message in addition to returning an HTTP code. The message is encoded because the details of the authorization status can contain privileged information that the user who requested the operation should not see. To decode an authorization status message, a user must be granted permissions through an IAM policy to request the DecodeAuthorizationMessage (sts:DecodeAuthorizationMessage) action. The decoded message includes the following type of information: Whether the request was denied due to an explicit deny or due to the absence of an explicit allow. For more information, see Determining Whether a Request is Allowed or Denied in the IAM User Guide. The principal who made the request. The requested action. The requested resource. The values of condition keys in the context of the user's request.

```sql
EXEC aws.sts.authorization_messages.decode_authorization_message 
@EncodedMessage='{{ EncodedMessage }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
