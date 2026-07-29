--- 
title: ip_access_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_access_settings
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

Creates, updates, deletes, gets or lists an <code>ip_access_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_access_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.ip_access_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ip_access_settings"
    values={[
        { label: 'get_ip_access_settings', value: 'get_ip_access_settings' },
        { label: 'list_ip_access_settings', value: 'list_ip_access_settings' }
    ]}
>
<TabItem value="get_ip_access_settings">

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
    <td>The additional encryption context of the IP access settings.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_portal_arns" /></td>
    <td><code>array</code></td>
    <td>A list of web portal ARNs that this IP access settings resource is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date timestamp of the IP access settings.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_managed_key" /></td>
    <td><code>string</code></td>
    <td>The customer managed key used to encrypt sensitive information in the IP access settings. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:kms:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:key\/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the IP access settings. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the IP access settings. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_access_settings_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IP access settings resource. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_rules" /></td>
    <td><code>array</code></td>
    <td>The IP rules of the IP access settings.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_ip_access_settings">

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
    <td><CopyableCode code="ip_access_settings" /></td>
    <td><code>array</code></td>
    <td>The IP access settings.</td>
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
    <td><a href="#get_ip_access_settings"><CopyableCode code="get_ip_access_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip_access_settings_arn"><code>ip_access_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the IP access settings.</td>
</tr>
<tr>
    <td><a href="#list_ip_access_settings"><CopyableCode code="list_ip_access_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of IP access settings.</td>
</tr>
<tr>
    <td><a href="#create_ip_access_settings"><CopyableCode code="create_ip_access_settings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ipRules"><code>ipRules</code></a></td>
    <td></td>
    <td>Creates an IP access settings resource that can be associated with a web portal.</td>
</tr>
<tr>
    <td><a href="#associate_ip_access_settings"><CopyableCode code="associate_ip_access_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-ipAccessSettingsArn"><code>ipAccessSettingsArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates an IP access settings resource with a web portal.</td>
</tr>
<tr>
    <td><a href="#disassociate_ip_access_settings"><CopyableCode code="disassociate_ip_access_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates IP access settings from a web portal.</td>
</tr>
<tr>
    <td><a href="#update_ip_access_settings"><CopyableCode code="update_ip_access_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ip_access_settings_arn"><code>ip_access_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates IP access settings.</td>
</tr>
<tr>
    <td><a href="#delete_ip_access_settings"><CopyableCode code="delete_ip_access_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ip_access_settings_arn"><code>ip_access_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes IP access settings.</td>
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
<tr id="parameter-ipAccessSettingsArn">
    <td><CopyableCode code="ipAccessSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IP access settings.</td>
</tr>
<tr id="parameter-ip_access_settings_arn">
    <td><CopyableCode code="ip_access_settings_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IP access settings.</td>
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
    defaultValue="get_ip_access_settings"
    values={[
        { label: 'get_ip_access_settings', value: 'get_ip_access_settings' },
        { label: 'list_ip_access_settings', value: 'list_ip_access_settings' }
    ]}
>
<TabItem value="get_ip_access_settings">

Gets the IP access settings.

```sql
SELECT
additional_encryption_context,
associated_portal_arns,
creation_date,
customer_managed_key,
description,
display_name,
ip_access_settings_arn,
ip_rules
FROM aws.workspaces_web.ip_access_settings
WHERE ip_access_settings_arn = '{{ ip_access_settings_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_ip_access_settings">

Retrieves a list of IP access settings.

```sql
SELECT
ip_access_settings,
next_token
FROM aws.workspaces_web.ip_access_settings
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_ip_access_settings"
    values={[
        { label: 'create_ip_access_settings', value: 'create_ip_access_settings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_ip_access_settings">

Creates an IP access settings resource that can be associated with a web portal.

```sql
INSERT INTO aws.workspaces_web.ip_access_settings (
displayName,
description,
tags,
customerManagedKey,
additionalEncryptionContext,
ipRules,
clientToken,
region
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ tags }}',
'{{ customerManagedKey }}',
'{{ additionalEncryptionContext }}',
'{{ ipRules }}' /* required */,
'{{ clientToken }}',
'{{ region }}'
RETURNING
ip_access_settings_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ip_access_settings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the ip_access_settings resource.
    - name: displayName
      value: "{{ displayName }}"
    - name: description
      value: "{{ description }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: customerManagedKey
      value: "{{ customerManagedKey }}"
    - name: additionalEncryptionContext
      value: "{{ additionalEncryptionContext }}"
    - name: ipRules
      value:
        - ipRange: "{{ ipRange }}"
          description: "{{ description }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_ip_access_settings"
    values={[
        { label: 'associate_ip_access_settings', value: 'associate_ip_access_settings' },
        { label: 'disassociate_ip_access_settings', value: 'disassociate_ip_access_settings' },
        { label: 'update_ip_access_settings', value: 'update_ip_access_settings' }
    ]}
>
<TabItem value="associate_ip_access_settings">

Associates an IP access settings resource with a web portal.

```sql
UPDATE aws.workspaces_web.ip_access_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND ipAccessSettingsArn = '{{ ipAccessSettingsArn }}' --required
AND region = '{{ region }}' --required
RETURNING
ip_access_settings_arn,
portal_arn;
```
</TabItem>
<TabItem value="disassociate_ip_access_settings">

Disassociates IP access settings from a web portal.

```sql
UPDATE aws.workspaces_web.ip_access_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_ip_access_settings">

Updates IP access settings.

```sql
UPDATE aws.workspaces_web.ip_access_settings
SET 
displayName = '{{ displayName }}',
description = '{{ description }}',
ipRules = '{{ ipRules }}',
clientToken = '{{ clientToken }}'
WHERE 
ip_access_settings_arn = '{{ ip_access_settings_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
ip_access_settings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_ip_access_settings"
    values={[
        { label: 'delete_ip_access_settings', value: 'delete_ip_access_settings' }
    ]}
>
<TabItem value="delete_ip_access_settings">

Deletes IP access settings.

```sql
DELETE FROM aws.workspaces_web.ip_access_settings
WHERE ip_access_settings_arn = '{{ ip_access_settings_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
