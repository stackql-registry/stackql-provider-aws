--- 
title: managed_login_brandings
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_login_brandings
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

Creates, updates, deletes, gets or lists a <code>managed_login_brandings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_login_brandings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.managed_login_brandings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_managed_login_branding"
    values={[
        { label: 'describe_managed_login_branding', value: 'describe_managed_login_branding' }
    ]}
>
<TabItem value="describe_managed_login_branding">

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
    <td><a href="#describe_managed_login_branding"><CopyableCode code="describe_managed_login_branding" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given the ID of a managed login branding style, returns detailed information about the style.</td>
</tr>
<tr>
    <td><a href="#create_managed_login_branding"><CopyableCode code="create_managed_login_branding" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-ClientId"><code>ClientId</code></a></td>
    <td></td>
    <td>Creates a new set of branding settings for a user pool style and associates it with an app client. This operation is the programmatic option for the creation of a new style in the branding editor. Provides values for UI customization in a Settings JSON object and image files in an Assets array. To send the JSON object Document type parameter in Settings, you might need to update to the most recent version of your Amazon Web Services SDK. To create a new style with default settings, set UseCognitoProvidedValues to true and don't provide values for any other options. This operation has a 2-megabyte request-size limit and include the CSS settings and image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito doesn't require that you pass all parameters in one request and preserves existing style settings that you don't specify. If your request is larger than 2MB, separate it into multiple requests, each with a size smaller than the limit. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#update_managed_login_branding"><CopyableCode code="update_managed_login_branding" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Configures the branding settings for a user pool style. This operation is the programmatic option for the configuration of a style in the branding editor. Provides values for UI customization in a Settings JSON object and image files in an Assets array. This operation has a 2-megabyte request-size limit and include the CSS settings and image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito doesn't require that you pass all parameters in one request and preserves existing style settings that you don't specify. If your request is larger than 2MB, separate it into multiple requests, each with a size smaller than the limit. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#delete_managed_login_branding"><CopyableCode code="delete_managed_login_branding" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a managed login branding style. When you delete a style, you delete the branding association for an app client. When an app client doesn't have a style assigned, your managed login pages for that app client are nonfunctional until you create a new style or switch the domain branding version. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="describe_managed_login_branding"
    values={[
        { label: 'describe_managed_login_branding', value: 'describe_managed_login_branding' }
    ]}
>
<TabItem value="describe_managed_login_branding">

Given the ID of a managed login branding style, returns detailed information about the style.

```sql
SELECT
Assets,
CreationDate,
LastModifiedDate,
ManagedLoginBrandingId,
Settings,
UseCognitoProvidedValues,
UserPoolId
FROM aws.cognito_idp.managed_login_brandings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_managed_login_branding"
    values={[
        { label: 'create_managed_login_branding', value: 'create_managed_login_branding' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_managed_login_branding">

Creates a new set of branding settings for a user pool style and associates it with an app client. This operation is the programmatic option for the creation of a new style in the branding editor. Provides values for UI customization in a Settings JSON object and image files in an Assets array. To send the JSON object Document type parameter in Settings, you might need to update to the most recent version of your Amazon Web Services SDK. To create a new style with default settings, set UseCognitoProvidedValues to true and don't provide values for any other options. This operation has a 2-megabyte request-size limit and include the CSS settings and image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito doesn't require that you pass all parameters in one request and preserves existing style settings that you don't specify. If your request is larger than 2MB, separate it into multiple requests, each with a size smaller than the limit. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
INSERT INTO aws.cognito_idp.managed_login_brandings (
UserPoolId,
ClientId,
UseCognitoProvidedValues,
Settings,
Assets,
region
)
SELECT 
'{{ UserPoolId }}' /* required */,
'{{ ClientId }}' /* required */,
{{ UseCognitoProvidedValues }},
'{{ Settings }}',
'{{ Assets }}',
'{{ region }}'
RETURNING
ManagedLoginBranding
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: managed_login_brandings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the managed_login_brandings resource.
    - name: UserPoolId
      value: "{{ UserPoolId }}"
      description: |
        The ID of the user pool where you want to create a new branding style.
    - name: ClientId
      value: "{{ ClientId }}"
      description: |
        The app client that you want to create the branding style for. Each style is linked to an app client until you delete it.
    - name: UseCognitoProvidedValues
      value: {{ UseCognitoProvidedValues }}
      description: |
        When true, applies the default branding style options. These default options are managed by Amazon Cognito. You can modify them later in the branding editor. When you specify true for this option, you must also omit values for Settings and Assets in the request.
    - name: Settings
      value: "{{ Settings }}"
      description: |
        A JSON file, encoded as a Document type, with the the settings that you want to apply to your style. The following components are not currently implemented and reserved for future use: signUp instructions sessionTimerDisplay languageSelector (for localization, see Managed login localization)
    - name: Assets
      description: |
        An array of image files that you want to apply to functions like backgrounds, logos, and icons. Each object must also indicate whether it is for dark mode, light mode, or browser-adaptive mode.
      value:
        - Category: "{{ Category }}"
          ColorMode: "{{ ColorMode }}"
          Extension: "{{ Extension }}"
          Bytes: "{{ Bytes }}"
          ResourceId: "{{ ResourceId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_managed_login_branding"
    values={[
        { label: 'update_managed_login_branding', value: 'update_managed_login_branding' }
    ]}
>
<TabItem value="update_managed_login_branding">

Configures the branding settings for a user pool style. This operation is the programmatic option for the configuration of a style in the branding editor. Provides values for UI customization in a Settings JSON object and image files in an Assets array. This operation has a 2-megabyte request-size limit and include the CSS settings and image assets for your app client. Your branding settings might exceed 2MB in size. Amazon Cognito doesn't require that you pass all parameters in one request and preserves existing style settings that you don't specify. If your request is larger than 2MB, separate it into multiple requests, each with a size smaller than the limit. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
UPDATE aws.cognito_idp.managed_login_brandings
SET 
UserPoolId = '{{ UserPoolId }}',
ManagedLoginBrandingId = '{{ ManagedLoginBrandingId }}',
UseCognitoProvidedValues = {{ UseCognitoProvidedValues }},
Settings = '{{ Settings }}',
Assets = '{{ Assets }}'
WHERE 
region = '{{ region }}' --required
RETURNING
ManagedLoginBranding;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_managed_login_branding"
    values={[
        { label: 'delete_managed_login_branding', value: 'delete_managed_login_branding' }
    ]}
>
<TabItem value="delete_managed_login_branding">

Deletes a managed login branding style. When you delete a style, you delete the branding association for an app client. When an app client doesn't have a style assigned, your managed login pages for that app client are nonfunctional until you create a new style or switch the domain branding version. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
DELETE FROM aws.cognito_idp.managed_login_brandings
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
