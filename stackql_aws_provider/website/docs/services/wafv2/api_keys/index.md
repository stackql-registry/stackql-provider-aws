--- 
title: api_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - api_keys
  - wafv2
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

Creates, updates, deletes, gets or lists an <code>api_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.wafv2.api_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_api_keys"
    values={[
        { label: 'list_api_keys', value: 'list_api_keys' }
    ]}
>
<TabItem value="list_api_keys">

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
    <td><CopyableCode code="APIKeySummaries" /></td>
    <td><code>array</code></td>
    <td>The array of key summaries. If you specified a Limit in your request, this might not be the full list.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationIntegrationURL" /></td>
    <td><code>string</code></td>
    <td>The CAPTCHA application integration URL, for use in your JavaScript implementation.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a Limit setting, if the number of objects that are still available for retrieval exceeds the limit, WAF returns a NextMarker value in the response. To retrieve the next batch of objects, provide the marker from the prior call in your next request. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#list_api_keys"><CopyableCode code="list_api_keys" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of the API keys that you've defined for the specified scope. API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the WAF Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_api_key"><CopyableCode code="create_api_key" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Scope"><code>Scope</code></a>, <a href="#parameter-TokenDomains"><code>TokenDomains</code></a></td>
    <td></td>
    <td>Creates an API key that contains a set of token domains. API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the WAF Developer Guide. You can use a single key for up to 5 domains. After you generate a key, you can copy it for use in your JavaScript integration.</td>
</tr>
<tr>
    <td><a href="#delete_api_key"><CopyableCode code="delete_api_key" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified API key. After you delete a key, it can take up to 24 hours for WAF to disallow use of the key in all regions.</td>
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
    defaultValue="list_api_keys"
    values={[
        { label: 'list_api_keys', value: 'list_api_keys' }
    ]}
>
<TabItem value="list_api_keys">

Retrieves a list of the API keys that you've defined for the specified scope. API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the WAF Developer Guide.

```sql
SELECT
APIKeySummaries,
ApplicationIntegrationURL,
NextMarker
FROM aws.wafv2.api_keys
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_api_key"
    values={[
        { label: 'create_api_key', value: 'create_api_key' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_api_key">

Creates an API key that contains a set of token domains. API keys are required for the integration of the CAPTCHA API in your JavaScript client applications. The API lets you customize the placement and characteristics of the CAPTCHA puzzle for your end users. For more information about the CAPTCHA JavaScript integration, see WAF client application integration in the WAF Developer Guide. You can use a single key for up to 5 domains. After you generate a key, you can copy it for use in your JavaScript integration.

```sql
INSERT INTO aws.wafv2.api_keys (
Scope,
TokenDomains,
region
)
SELECT 
'{{ Scope }}' /* required */,
'{{ TokenDomains }}' /* required */,
'{{ region }}'
RETURNING
APIKey
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: api_keys
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the api_keys resource.
    - name: Scope
      value: "{{ Scope }}"
      description: |
        Specifies whether this is for a global resource type, such as a Amazon CloudFront distribution. For an Amplify application, use CLOUDFRONT. To work with CloudFront, you must also specify the Region US East (N. Virginia) as follows: CLI - Specify the Region when you use the CloudFront scope: --scope=CLOUDFRONT --region=us-east-1. API and SDKs - For all calls, use the Region endpoint us-east-1.
      valid_values: ['CLOUDFRONT', 'REGIONAL']
    - name: TokenDomains
      value:
        - "{{ TokenDomains }}"
      description: |
        The client application domains that you want to use this API key for. Example JSON: "TokenDomains": ["abc.com", "store.abc.com"] Public suffixes aren't allowed. For example, you can't use gov.au or co.uk as token domains.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_api_key"
    values={[
        { label: 'delete_api_key', value: 'delete_api_key' }
    ]}
>
<TabItem value="delete_api_key">

Deletes the specified API key. After you delete a key, it can take up to 24 hours for WAF to disallow use of the key in all regions.

```sql
DELETE FROM aws.wafv2.api_keys
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
