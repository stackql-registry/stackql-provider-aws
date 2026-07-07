--- 
title: dashboard_embed_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - dashboard_embed_urls
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>dashboard_embed_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dashboard_embed_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.dashboard_embed_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_dashboard_embed_url"
    values={[
        { label: 'get_dashboard_embed_url', value: 'get_dashboard_embed_url' }
    ]}
>
<TabItem value="get_dashboard_embed_url">

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
    <td><CopyableCode code="EmbedUrl" /></td>
    <td><code>string</code></td>
    <td>A single-use URL that you can put into your server-side webpage to embed your dashboard. This URL is valid for 5 minutes. The API operation provides the URL with an auth_code value that enables one (and only one) sign-on to a user session that is valid for 10 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
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
    <td><a href="#get_dashboard_embed_url"><CopyableCode code="get_dashboard_embed_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-dashboard_id"><code>dashboard_id</code></a>, <a href="#parameter-creds-type"><code>creds-type</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-session-lifetime"><code>session-lifetime</code></a>, <a href="#parameter-undo-redo-disabled"><code>undo-redo-disabled</code></a>, <a href="#parameter-reset-disabled"><code>reset-disabled</code></a>, <a href="#parameter-state-persistence-enabled"><code>state-persistence-enabled</code></a>, <a href="#parameter-user-arn"><code>user-arn</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-additional-dashboard-ids"><code>additional-dashboard-ids</code></a></td>
    <td>Generates a temporary session URL and authorization code(bearer token) that you can use to embed an Amazon Quick Sight read-only dashboard in your website or application. Before you use this command, make sure that you have configured the dashboards and permissions. Currently, you can use GetDashboardEmbedURL only from the server, not from the user's browser. The following rules apply to the generated URL: They must be used together. They can be used one time only. They are valid for 5 minutes after you run this command. You are charged only when the URL is used or there is interaction with Quick. The resulting user session is valid for 15 minutes (default) up to 10 hours (maximum). You can use the optional SessionLifetimeInMinutes parameter to customize session duration. For more information, see Embedding Analytics Using GetDashboardEmbedUrl in the Amazon Quick User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon Quick Developer Portal.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the Amazon Web Services account that contains the dashboard that you're embedding.</td>
</tr>
<tr id="parameter-creds-type">
    <td><CopyableCode code="creds-type" /></td>
    <td><code>string</code></td>
    <td>The authentication method that the user uses to sign in.</td>
</tr>
<tr id="parameter-dashboard_id">
    <td><CopyableCode code="dashboard_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the dashboard, also added to the Identity and Access Management (IAM) policy.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-additional-dashboard-ids">
    <td><CopyableCode code="additional-dashboard-ids" /></td>
    <td><code>array</code></td>
    <td>A list of one or more dashboard IDs that you want anonymous users to have tempporary access to. Currently, the IdentityType parameter must be set to ANONYMOUS because other identity types authenticate as Quick or IAM users. For example, if you set "--dashboard-id dash_id1 --dashboard-id dash_id2 dash_id3 identity-type ANONYMOUS", the session can access all three dashboards.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The Amazon Quick Sight namespace that contains the dashboard IDs in this request. If you're not using a custom namespace, set Namespace = default.</td>
</tr>
<tr id="parameter-reset-disabled">
    <td><CopyableCode code="reset-disabled" /></td>
    <td><code>boolean</code></td>
    <td>Remove the reset button on the embedded dashboard. The default is FALSE, which enables the reset button.</td>
</tr>
<tr id="parameter-session-lifetime">
    <td><CopyableCode code="session-lifetime" /></td>
    <td><code>integer (int64)</code></td>
    <td>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</td>
</tr>
<tr id="parameter-state-persistence-enabled">
    <td><CopyableCode code="state-persistence-enabled" /></td>
    <td><code>boolean</code></td>
    <td>Adds persistence of state for the user session in an embedded dashboard. Persistence applies to the sheet and the parameter settings. These are control settings that the dashboard subscriber (Amazon Quick Sight reader) chooses while viewing the dashboard. If this is set to TRUE, the settings are the same when the subscriber reopens the same dashboard URL. The state is stored in Amazon Quick Sight, not in a browser cookie. If this is set to FALSE, the state of the user session is not persisted. The default is FALSE.</td>
</tr>
<tr id="parameter-undo-redo-disabled">
    <td><CopyableCode code="undo-redo-disabled" /></td>
    <td><code>boolean</code></td>
    <td>Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables the undo/redo button.</td>
</tr>
<tr id="parameter-user-arn">
    <td><CopyableCode code="user-arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Quick user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type. You can use this for any Amazon Quick users in your account (readers, authors, or admins) authenticated as one of the following: Active Directory (AD) users or group members Invited nonfederated users IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation. Omit this parameter for users in the third group – IAM users and IAM role-based sessions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_dashboard_embed_url"
    values={[
        { label: 'get_dashboard_embed_url', value: 'get_dashboard_embed_url' }
    ]}
>
<TabItem value="get_dashboard_embed_url">

Generates a temporary session URL and authorization code(bearer token) that you can use to embed an Amazon Quick Sight read-only dashboard in your website or application. Before you use this command, make sure that you have configured the dashboards and permissions. Currently, you can use GetDashboardEmbedURL only from the server, not from the user's browser. The following rules apply to the generated URL: They must be used together. They can be used one time only. They are valid for 5 minutes after you run this command. You are charged only when the URL is used or there is interaction with Quick. The resulting user session is valid for 15 minutes (default) up to 10 hours (maximum). You can use the optional SessionLifetimeInMinutes parameter to customize session duration. For more information, see Embedding Analytics Using GetDashboardEmbedUrl in the Amazon Quick User Guide. For more information about the high-level steps for embedding and for an interactive demo of the ways you can customize embedding, visit the Amazon Quick Developer Portal.

```sql
SELECT
EmbedUrl,
RequestId,
Status
FROM aws.quicksight.dashboard_embed_urls
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND dashboard_id = '{{ dashboard_id }}' -- required
AND `creds-type` = '{{ creds-type }}' -- required
AND region = '{{ region }}' -- required
AND `session-lifetime` = '{{ session-lifetime }}'
AND `undo-redo-disabled` = '{{ undo-redo-disabled }}'
AND `reset-disabled` = '{{ reset-disabled }}'
AND `state-persistence-enabled` = '{{ state-persistence-enabled }}'
AND `user-arn` = '{{ user-arn }}'
AND namespace = '{{ namespace }}'
AND `additional-dashboard-ids` = '{{ additional-dashboard-ids }}'
;
```
</TabItem>
</Tabs>
