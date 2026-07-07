--- 
title: managed_login_branding_by_clients
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_login_branding_by_clients
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

Creates, updates, deletes, gets or lists a <code>managed_login_branding_by_clients</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_login_branding_by_clients" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.managed_login_branding_by_clients" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_managed_login_branding_by_client"
    values={[
        { label: 'describe_managed_login_branding_by_client', value: 'describe_managed_login_branding_by_client' }
    ]}
>
<TabItem value="describe_managed_login_branding_by_client">

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
    <td><CopyableCode code="Assets" /></td>
    <td><code>array</code></td>
    <td>An array of image files that you want to apply to roles like backgrounds, logos, and icons. Each object must also indicate whether it is for dark mode, light mode, or browser-adaptive mode.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="LastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="ManagedLoginBrandingId" /></td>
    <td><code>string</code></td>
    <td>The ID of the managed login branding style. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;4&#93;&#91;0-9a-fA-F&#93;&#123;3&#125;-&#91;89abAB&#93;&#91;0-9a-fA-F&#93;&#123;3&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Settings" /></td>
    <td><code>object</code></td>
    <td>A JSON file, encoded as a Document type, with the the settings that you want to apply to your style. The following components are not currently implemented and reserved for future use: signUp instructions sessionTimerDisplay languageSelector (for localization, see Managed login localization)</td>
</tr>
<tr>
    <td><CopyableCode code="UseCognitoProvidedValues" /></td>
    <td><code>boolean</code></td>
    <td>When true, applies the default branding style options. This option reverts to default style options that are managed by Amazon Cognito. You can modify them later in the branding editor. When you specify true for this option, you must also omit values for Settings and Assets in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="UserPoolId" /></td>
    <td><code>string</code></td>
    <td>The user pool where the branding style is assigned. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_managed_login_branding_by_client"><CopyableCode code="describe_managed_login_branding_by_client" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given the ID of a user pool app client, returns detailed information about the style assigned to the app client.</td>
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
    defaultValue="describe_managed_login_branding_by_client"
    values={[
        { label: 'describe_managed_login_branding_by_client', value: 'describe_managed_login_branding_by_client' }
    ]}
>
<TabItem value="describe_managed_login_branding_by_client">

Given the ID of a user pool app client, returns detailed information about the style assigned to the app client.

```sql
SELECT
Assets,
CreationDate,
LastModifiedDate,
ManagedLoginBrandingId,
Settings,
UseCognitoProvidedValues,
UserPoolId
FROM aws.cognito_idp.managed_login_branding_by_clients
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
