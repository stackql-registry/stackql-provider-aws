--- 
title: terms
hide_title: false
hide_table_of_contents: false
keywords:
  - terms
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

Creates, updates, deletes, gets or lists a <code>terms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="terms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.terms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_terms"
    values={[
        { label: 'describe_terms', value: 'describe_terms' },
        { label: 'list_terms', value: 'list_terms' }
    ]}
>
<TabItem value="describe_terms">

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
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the app client that the terms documents are assigned to. (pattern: &lt;code&gt;&#91;\w+&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was created. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="enforcement" /></td>
    <td><code>string</code></td>
    <td>This parameter is reserved for future use and currently accepts one value. (NONE)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="links" /></td>
    <td><code>object</code></td>
    <td>A map of URLs to languages. For each localized language that will view the requested TermsName, assign a URL. A selection of cognito:default displays for all languages that don't have a language-specific URL. For example, "cognito:default": "https:​//terms.example.com", "cognito:spanish": "https:​//terms.example.com/es".</td>
</tr>
<tr>
    <td><CopyableCode code="terms_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the terms documents. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;-&#91;0-9a-fA-F&#93;&#123;4&#125;-&#91;4&#93;&#91;0-9a-fA-F&#93;&#123;3&#125;-&#91;89abAB&#93;&#91;0-9a-fA-F&#93;&#123;3&#125;-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="terms_name" /></td>
    <td><code>string</code></td>
    <td>The type and friendly name of the terms documents. (pattern: &lt;code&gt;^(terms-of-use|privacy-policy)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="terms_source" /></td>
    <td><code>string</code></td>
    <td>This parameter is reserved for future use and currently accepts one value. (LINK)</td>
</tr>
<tr>
    <td><CopyableCode code="user_pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user pool that contains the terms documents. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_terms">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>This API operation returns a limited number of results. The pagination token is an identifier that you can present in an additional API request with the same parameters. When you include the pagination token, Amazon Cognito returns the next set of items after the current list. Subsequent requests return a new pagination token. By use of this token, you can paginate through the full list of items.</td>
</tr>
<tr>
    <td><CopyableCode code="terms" /></td>
    <td><code>array</code></td>
    <td>A summary of the requested terms documents. Includes unique identifiers for later changes to the terms documents.</td>
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
    <td><a href="#describe_terms"><CopyableCode code="describe_terms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for the requested terms documents ID. For more information, see Terms documents. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#list_terms"><CopyableCode code="list_terms" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about all terms documents for the requested user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#create_terms"><CopyableCode code="create_terms" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-ClientId"><code>ClientId</code></a>, <a href="#parameter-TermsName"><code>TermsName</code></a>, <a href="#parameter-TermsSource"><code>TermsSource</code></a>, <a href="#parameter-Enforcement"><code>Enforcement</code></a></td>
    <td></td>
    <td>Creates terms documents for the requested app client. When Terms and conditions and Privacy policy documents are configured, the app client displays links to them in the sign-up page of managed login for the app client. You can provide URLs for terms documents in the languages that are supported by managed login localization. Amazon Cognito directs users to the terms documents for their current language, with fallback to default if no document exists for the language. Each request accepts one type of terms document and a map of language-to-link for that document type. You must provide both types of terms documents in at least one language before Amazon Cognito displays your terms documents. Supply each type in separate requests. For more information, see Terms documents. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#update_terms"><CopyableCode code="update_terms" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-TermsId"><code>TermsId</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Modifies existing terms documents for the requested app client. When Terms and conditions and Privacy policy documents are configured, the app client displays links to them in the sign-up page of managed login for the app client. You can provide URLs for terms documents in the languages that are supported by managed login localization. Amazon Cognito directs users to the terms documents for their current language, with fallback to default if no document exists for the language. Each request accepts one type of terms document and a map of language-to-link for that document type. You must provide both types of terms documents in at least one language before Amazon Cognito displays your terms documents. Supply each type in separate requests. For more information, see Terms documents. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#delete_terms"><CopyableCode code="delete_terms" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the terms documents with the requested ID from your app client. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="describe_terms"
    values={[
        { label: 'describe_terms', value: 'describe_terms' },
        { label: 'list_terms', value: 'list_terms' }
    ]}
>
<TabItem value="describe_terms">

Returns details for the requested terms documents ID. For more information, see Terms documents. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
client_id,
creation_date,
enforcement,
last_modified_date,
links,
terms_id,
terms_name,
terms_source,
user_pool_id
FROM aws.cognito_idp.terms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_terms">

Returns details about all terms documents for the requested user pool. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
next_token,
terms
FROM aws.cognito_idp.terms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_terms"
    values={[
        { label: 'create_terms', value: 'create_terms' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_terms">

Creates terms documents for the requested app client. When Terms and conditions and Privacy policy documents are configured, the app client displays links to them in the sign-up page of managed login for the app client. You can provide URLs for terms documents in the languages that are supported by managed login localization. Amazon Cognito directs users to the terms documents for their current language, with fallback to default if no document exists for the language. Each request accepts one type of terms document and a map of language-to-link for that document type. You must provide both types of terms documents in at least one language before Amazon Cognito displays your terms documents. Supply each type in separate requests. For more information, see Terms documents. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
INSERT INTO aws.cognito_idp.terms (
UserPoolId,
ClientId,
TermsName,
TermsSource,
Enforcement,
Links,
region
)
SELECT 
'{{ UserPoolId }}' /* required */,
'{{ ClientId }}' /* required */,
'{{ TermsName }}' /* required */,
'{{ TermsSource }}' /* required */,
'{{ Enforcement }}' /* required */,
'{{ Links }}',
'{{ region }}'
RETURNING
terms
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: terms
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the terms resource.
    - name: UserPoolId
      value: "{{ UserPoolId }}"
      description: |
        The ID of the user pool where you want to create terms documents.
    - name: ClientId
      value: "{{ ClientId }}"
      description: |
        The ID of the app client where you want to create terms documents. Must be an app client in the requested user pool.
    - name: TermsName
      value: "{{ TermsName }}"
      description: |
        A friendly name for the document that you want to create in the current request. Must begin with terms-of-use or privacy-policy as identification of the document type. Provide URLs for both terms-of-use and privacy-policy in separate requests.
    - name: TermsSource
      value: "{{ TermsSource }}"
      description: |
        This parameter is reserved for future use and currently accepts only one value.
      valid_values: ['LINK']
    - name: Enforcement
      value: "{{ Enforcement }}"
      description: |
        This parameter is reserved for future use and currently accepts only one value.
      valid_values: ['NONE']
    - name: Links
      value: "{{ Links }}"
      description: |
        A map of URLs to languages. For each localized language that will view the requested TermsName, assign a URL. A selection of cognito:default displays for all languages that don't have a language-specific URL. For example, "cognito:default": "https://terms.example.com", "cognito:spanish": "https://terms.example.com/es".
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_terms"
    values={[
        { label: 'update_terms', value: 'update_terms' }
    ]}
>
<TabItem value="update_terms">

Modifies existing terms documents for the requested app client. When Terms and conditions and Privacy policy documents are configured, the app client displays links to them in the sign-up page of managed login for the app client. You can provide URLs for terms documents in the languages that are supported by managed login localization. Amazon Cognito directs users to the terms documents for their current language, with fallback to default if no document exists for the language. Each request accepts one type of terms document and a map of language-to-link for that document type. You must provide both types of terms documents in at least one language before Amazon Cognito displays your terms documents. Supply each type in separate requests. For more information, see Terms documents. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
UPDATE aws.cognito_idp.terms
SET 
TermsId = '{{ TermsId }}',
UserPoolId = '{{ UserPoolId }}',
TermsName = '{{ TermsName }}',
TermsSource = '{{ TermsSource }}',
Enforcement = '{{ Enforcement }}',
Links = '{{ Links }}'
WHERE 
region = '{{ region }}' --required
AND TermsId = '{{ TermsId }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
RETURNING
terms;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_terms"
    values={[
        { label: 'delete_terms', value: 'delete_terms' }
    ]}
>
<TabItem value="delete_terms">

Deletes the terms documents with the requested ID from your app client. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
DELETE FROM aws.cognito_idp.terms
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
