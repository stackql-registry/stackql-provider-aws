--- 
title: session_embed_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - session_embed_urls
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

Creates, updates, deletes, gets or lists a <code>session_embed_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="session_embed_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.session_embed_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_session_embed_url"
    values={[
        { label: 'get_session_embed_url', value: 'get_session_embed_url' }
    ]}
>
<TabItem value="get_session_embed_url">

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
    <td><CopyableCode code="embed_url" /></td>
    <td><code>string</code></td>
    <td>A single-use URL that you can put into your server-side web page to embed your Quick session. This URL is valid for 5 minutes. The API operation provides the URL with an auth_code value that enables one (and only one) sign-on to a user session that is valid for 10 hours.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
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
    <td><a href="#get_session_embed_url"><CopyableCode code="get_session_embed_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-entry-point"><code>entry-point</code></a>, <a href="#parameter-session-lifetime"><code>session-lifetime</code></a>, <a href="#parameter-user-arn"><code>user-arn</code></a></td>
    <td>Generates a session URL and authorization code that you can use to embed the Amazon Amazon Quick Sight console in your web server code. Use GetSessionEmbedUrl where you want to provide an authoring portal that allows users to create data sources, datasets, analyses, and dashboards. The users who access an embedded Amazon Quick Sight console need belong to the author or admin security cohort. If you want to restrict permissions to some of these features, add a custom permissions profile to the user with the UpdateUser API operation. Use RegisterUser API operation to add a new user with a custom permission profile attached. For more information, see the following sections in the Amazon Quick User Guide: Embedding Analytics Customizing Access to the Amazon Quick Console</td>
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
    <td>The ID for the Amazon Web Services account associated with your Amazon Quick Sight subscription.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-entry-point">
    <td><CopyableCode code="entry-point" /></td>
    <td><code>string</code></td>
    <td>The URL you use to access the embedded session. The entry point URL is constrained to the following paths: /start /start/analyses /start/dashboards /start/favorites /dashboards/DashboardId - where DashboardId is the actual ID key from the Amazon Quick Sight console URL of the dashboard /analyses/AnalysisId - where AnalysisId is the actual ID key from the Amazon Quick Sight console URL of the analysis</td>
</tr>
<tr id="parameter-session-lifetime">
    <td><CopyableCode code="session-lifetime" /></td>
    <td><code>integer (int64)</code></td>
    <td>How many minutes the session is valid. The session lifetime must be 15-600 minutes.</td>
</tr>
<tr id="parameter-user-arn">
    <td><CopyableCode code="user-arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Quick user's Amazon Resource Name (ARN), for use with QUICKSIGHT identity type. You can use this for any type of Amazon Quick users in your account (readers, authors, or admins). They need to be authenticated as one of the following: Active Directory (AD) users or group members Invited nonfederated users IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation Omit this parameter for users in the third group, IAM users and IAM role-based sessions.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_session_embed_url"
    values={[
        { label: 'get_session_embed_url', value: 'get_session_embed_url' }
    ]}
>
<TabItem value="get_session_embed_url">

Generates a session URL and authorization code that you can use to embed the Amazon Amazon Quick Sight console in your web server code. Use GetSessionEmbedUrl where you want to provide an authoring portal that allows users to create data sources, datasets, analyses, and dashboards. The users who access an embedded Amazon Quick Sight console need belong to the author or admin security cohort. If you want to restrict permissions to some of these features, add a custom permissions profile to the user with the UpdateUser API operation. Use RegisterUser API operation to add a new user with a custom permission profile attached. For more information, see the following sections in the Amazon Quick User Guide: Embedding Analytics Customizing Access to the Amazon Quick Console

```sql
SELECT
embed_url,
request_id,
status
FROM aws.quicksight.session_embed_urls
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `entry-point` = '{{ entry-point }}'
AND `session-lifetime` = '{{ session-lifetime }}'
AND `user-arn` = '{{ user-arn }}'
;
```
</TabItem>
</Tabs>
