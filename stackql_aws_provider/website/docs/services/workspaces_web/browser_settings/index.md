--- 
title: browser_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - browser_settings
  - workspaces_web
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

Creates, updates, deletes, gets or lists a <code>browser_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="browser_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.browser_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_browser_settings"
    values={[
        { label: 'get_browser_settings', value: 'get_browser_settings' },
        { label: 'list_browser_settings', value: 'list_browser_settings' }
    ]}
>
<TabItem value="get_browser_settings">

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
    <td><CopyableCode code="additional_encryption_context" /></td>
    <td><code>object</code></td>
    <td>The additional encryption context of the browser settings.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_portal_arns" /></td>
    <td><code>array</code></td>
    <td>A list of web portal ARNs that this browser settings is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="browser_policy" /></td>
    <td><code>string</code></td>
    <td>A JSON string containing Chrome Enterprise policies that will be applied to all streaming sessions. (pattern: &lt;code&gt;\&#123;&#91;\S\s&#93;*\&#125;\s*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="browser_settings_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the browser settings. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_managed_key" /></td>
    <td><code>string</code></td>
    <td>The customer managed key used to encrypt sensitive information in the browser settings. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:kms:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:key\/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="web_content_filtering_policy" /></td>
    <td><code>object</code></td>
    <td>The policy that specifies which URLs end users are allowed to access or which URLs or domain categories they are restricted from accessing for enhanced security.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_browser_settings">

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
    <td><CopyableCode code="browser_settings" /></td>
    <td><code>array</code></td>
    <td>The browser settings.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
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
    <td><a href="#get_browser_settings"><CopyableCode code="get_browser_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-browser_settings_arn"><code>browser_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets browser settings.</td>
</tr>
<tr>
    <td><a href="#list_browser_settings"><CopyableCode code="list_browser_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of browser settings.</td>
</tr>
<tr>
    <td><a href="#create_browser_settings"><CopyableCode code="create_browser_settings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal.</td>
</tr>
<tr>
    <td><a href="#associate_browser_settings"><CopyableCode code="associate_browser_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-browserSettingsArn"><code>browserSettingsArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a browser settings resource with a web portal.</td>
</tr>
<tr>
    <td><a href="#disassociate_browser_settings"><CopyableCode code="disassociate_browser_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates browser settings from a web portal.</td>
</tr>
<tr>
    <td><a href="#update_browser_settings"><CopyableCode code="update_browser_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-browser_settings_arn"><code>browser_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates browser settings.</td>
</tr>
<tr>
    <td><a href="#delete_browser_settings"><CopyableCode code="delete_browser_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-browser_settings_arn"><code>browser_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes browser settings.</td>
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
<tr id="parameter-browserSettingsArn">
    <td><CopyableCode code="browserSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the browser settings.</td>
</tr>
<tr id="parameter-browser_settings_arn">
    <td><CopyableCode code="browser_settings_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the browser settings.</td>
</tr>
<tr id="parameter-portal_arn">
    <td><CopyableCode code="portal_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the web portal.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be included in the next page.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_browser_settings"
    values={[
        { label: 'get_browser_settings', value: 'get_browser_settings' },
        { label: 'list_browser_settings', value: 'list_browser_settings' }
    ]}
>
<TabItem value="get_browser_settings">

Gets browser settings.

```sql
SELECT
additional_encryption_context,
associated_portal_arns,
browser_policy,
browser_settings_arn,
customer_managed_key,
web_content_filtering_policy
FROM aws.workspaces_web.browser_settings
WHERE browser_settings_arn = '{{ browser_settings_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_browser_settings">

Retrieves a list of browser settings.

```sql
SELECT
browser_settings,
next_token
FROM aws.workspaces_web.browser_settings
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_browser_settings"
    values={[
        { label: 'create_browser_settings', value: 'create_browser_settings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_browser_settings">

Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal.

```sql
INSERT INTO aws.workspaces_web.browser_settings (
tags,
customerManagedKey,
additionalEncryptionContext,
browserPolicy,
clientToken,
webContentFilteringPolicy,
region
)
SELECT 
'{{ tags }}',
'{{ customerManagedKey }}',
'{{ additionalEncryptionContext }}',
'{{ browserPolicy }}',
'{{ clientToken }}',
'{{ webContentFilteringPolicy }}',
'{{ region }}'
RETURNING
browser_settings_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: browser_settings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the browser_settings resource.
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: customerManagedKey
      value: "{{ customerManagedKey }}"
    - name: additionalEncryptionContext
      value: "{{ additionalEncryptionContext }}"
    - name: browserPolicy
      value: "{{ browserPolicy }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: webContentFilteringPolicy
      description: |
        The policy that specifies which URLs end users are allowed to access or which URLs or domain categories they are restricted from accessing for enhanced security.
      value:
        blockedCategories:
          - "{{ blockedCategories }}"
        allowedUrls:
          - "{{ allowedUrls }}"
        blockedUrls:
          - "{{ blockedUrls }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_browser_settings"
    values={[
        { label: 'associate_browser_settings', value: 'associate_browser_settings' },
        { label: 'disassociate_browser_settings', value: 'disassociate_browser_settings' },
        { label: 'update_browser_settings', value: 'update_browser_settings' }
    ]}
>
<TabItem value="associate_browser_settings">

Associates a browser settings resource with a web portal.

```sql
UPDATE aws.workspaces_web.browser_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND browserSettingsArn = '{{ browserSettingsArn }}' --required
AND region = '{{ region }}' --required
RETURNING
browser_settings_arn,
portal_arn;
```
</TabItem>
<TabItem value="disassociate_browser_settings">

Disassociates browser settings from a web portal.

```sql
UPDATE aws.workspaces_web.browser_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_browser_settings">

Updates browser settings.

```sql
UPDATE aws.workspaces_web.browser_settings
SET 
browserPolicy = '{{ browserPolicy }}',
clientToken = '{{ clientToken }}',
webContentFilteringPolicy = '{{ webContentFilteringPolicy }}'
WHERE 
browser_settings_arn = '{{ browser_settings_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
browser_settings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_browser_settings"
    values={[
        { label: 'delete_browser_settings', value: 'delete_browser_settings' }
    ]}
>
<TabItem value="delete_browser_settings">

Deletes browser settings.

```sql
DELETE FROM aws.workspaces_web.browser_settings
WHERE browser_settings_arn = '{{ browser_settings_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
