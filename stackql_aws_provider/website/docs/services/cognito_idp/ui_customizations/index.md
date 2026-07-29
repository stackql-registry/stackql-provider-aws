--- 
title: ui_customizations
hide_title: false
hide_table_of_contents: false
keywords:
  - ui_customizations
  - cognito_idp
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

Creates, updates, deletes, gets or lists a <code>ui_customizations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ui_customizations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.ui_customizations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ui_customization"
    values={[
        { label: 'get_ui_customization', value: 'get_ui_customization' }
    ]}
>
<TabItem value="get_ui_customization">

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
    <td><CopyableCode code="css" /></td>
    <td><code>string</code></td>
    <td>The CSS values in the UI customization.</td>
</tr>
<tr>
    <td><CopyableCode code="css_version" /></td>
    <td><code>string</code></td>
    <td>The CSS version number.</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The app client ID for your UI customization. When this value isn't present, the customization applies to all user pool app clients that don't have client-level settings.. (pattern: &lt;code&gt;&#91;\w+&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="image_url" /></td>
    <td><code>string</code></td>
    <td>A URL path to the hosted logo image of your UI customization.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="user_pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user pool with hosted UI customizations. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_ui_customization"><CopyableCode code="get_ui_customization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID or app client, returns information about classic hosted UI branding that you applied, if any. Returns user-pool level branding information if no app client branding is applied, or if you don't specify an app client ID. Returns an empty object if you haven't applied hosted UI branding to either the client or the user pool. For more information, see Hosted UI (classic) branding.</td>
</tr>
<tr>
    <td><a href="#set_ui_customization"><CopyableCode code="set_ui_customization" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Configures UI branding settings for domains with the hosted UI (classic) branding version. Your user pool must have a domain. Configure a domain with . Set the default configuration for all clients with a ClientId of ALL. When the ClientId value is an app client ID, the settings you pass in this request apply to that app client and override the default ALL configuration. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="get_ui_customization"
    values={[
        { label: 'get_ui_customization', value: 'get_ui_customization' }
    ]}
>
<TabItem value="get_ui_customization">

Given a user pool ID or app client, returns information about classic hosted UI branding that you applied, if any. Returns user-pool level branding information if no app client branding is applied, or if you don't specify an app client ID. Returns an empty object if you haven't applied hosted UI branding to either the client or the user pool. For more information, see Hosted UI (classic) branding.

```sql
SELECT
css,
css_version,
client_id,
creation_date,
image_url,
last_modified_date,
user_pool_id
FROM aws.cognito_idp.ui_customizations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_ui_customization"
    values={[
        { label: 'set_ui_customization', value: 'set_ui_customization' }
    ]}
>
<TabItem value="set_ui_customization">

Configures UI branding settings for domains with the hosted UI (classic) branding version. Your user pool must have a domain. Configure a domain with . Set the default configuration for all clients with a ClientId of ALL. When the ClientId value is an app client ID, the settings you pass in this request apply to that app client and override the default ALL configuration. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
UPDATE aws.cognito_idp.ui_customizations
SET 
UserPoolId = '{{ UserPoolId }}',
ClientId = '{{ ClientId }}',
CSS = '{{ CSS }}',
ImageFile = '{{ ImageFile }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
RETURNING
ui_customization;
```
</TabItem>
</Tabs>
