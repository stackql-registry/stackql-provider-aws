--- 
title: data_protection_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - data_protection_settings
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

Creates, updates, deletes, gets or lists a <code>data_protection_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_protection_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.data_protection_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_data_protection_settings"
    values={[
        { label: 'get_data_protection_settings', value: 'get_data_protection_settings' },
        { label: 'list_data_protection_settings', value: 'list_data_protection_settings' }
    ]}
>
<TabItem value="get_data_protection_settings">

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
    <td>The additional encryption context of the data protection settings.</td>
</tr>
<tr>
    <td><CopyableCode code="associated_portal_arns" /></td>
    <td><code>array</code></td>
    <td>A list of web portal ARNs that this data protection settings resource is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date timestamp of the data protection settings.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_managed_key" /></td>
    <td><code>string</code></td>
    <td>The customer managed key used to encrypt sensitive information in the data protection settings. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:kms:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:key\/&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="data_protection_settings_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the data protection settings resource. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data protection settings. (pattern: &lt;code&gt;&#91; _\-\d\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the data protection settings. (pattern: &lt;code&gt;&#91; _\-\d\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="inline_redaction_configuration" /></td>
    <td><code>object</code></td>
    <td>The configuration for in-session inline redaction.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_data_protection_settings">

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation date timestamp of the data protection settings.</td>
</tr>
<tr>
    <td><CopyableCode code="data_protection_settings_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the data protection settings. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the data protection settings. (pattern: &lt;code&gt;&#91; _\-\d\w&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The display name of the data protection settings. (pattern: &lt;code&gt;&#91; _\-\d\w&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_data_protection_settings"><CopyableCode code="get_data_protection_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-data_protection_settings_arn"><code>data_protection_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the data protection settings.</td>
</tr>
<tr>
    <td><a href="#list_data_protection_settings"><CopyableCode code="list_data_protection_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of data protection settings.</td>
</tr>
<tr>
    <td><a href="#create_data_protection_settings"><CopyableCode code="create_data_protection_settings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a data protection settings resource that can be associated with a web portal.</td>
</tr>
<tr>
    <td><a href="#associate_data_protection_settings"><CopyableCode code="associate_data_protection_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-dataProtectionSettingsArn"><code>dataProtectionSettingsArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a data protection settings resource with a web portal.</td>
</tr>
<tr>
    <td><a href="#disassociate_data_protection_settings"><CopyableCode code="disassociate_data_protection_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates data protection settings from a web portal.</td>
</tr>
<tr>
    <td><a href="#update_data_protection_settings"><CopyableCode code="update_data_protection_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-data_protection_settings_arn"><code>data_protection_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates data protection settings.</td>
</tr>
<tr>
    <td><a href="#delete_data_protection_settings"><CopyableCode code="delete_data_protection_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-data_protection_settings_arn"><code>data_protection_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes data protection settings.</td>
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
<tr id="parameter-dataProtectionSettingsArn">
    <td><CopyableCode code="dataProtectionSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the data protection settings.</td>
</tr>
<tr id="parameter-data_protection_settings_arn">
    <td><CopyableCode code="data_protection_settings_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the data protection settings.</td>
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
    defaultValue="get_data_protection_settings"
    values={[
        { label: 'get_data_protection_settings', value: 'get_data_protection_settings' },
        { label: 'list_data_protection_settings', value: 'list_data_protection_settings' }
    ]}
>
<TabItem value="get_data_protection_settings">

Gets the data protection settings.

```sql
SELECT
additional_encryption_context,
associated_portal_arns,
creation_date,
customer_managed_key,
data_protection_settings_arn,
description,
display_name,
inline_redaction_configuration
FROM aws.workspaces_web.data_protection_settings
WHERE data_protection_settings_arn = '{{ data_protection_settings_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_data_protection_settings">

Retrieves a list of data protection settings.

```sql
SELECT
creation_date,
data_protection_settings_arn,
description,
display_name
FROM aws.workspaces_web.data_protection_settings
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_data_protection_settings"
    values={[
        { label: 'create_data_protection_settings', value: 'create_data_protection_settings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_data_protection_settings">

Creates a data protection settings resource that can be associated with a web portal.

```sql
INSERT INTO aws.workspaces_web.data_protection_settings (
displayName,
description,
tags,
customerManagedKey,
additionalEncryptionContext,
inlineRedactionConfiguration,
clientToken,
region
)
SELECT 
'{{ displayName }}',
'{{ description }}',
'{{ tags }}',
'{{ customerManagedKey }}',
'{{ additionalEncryptionContext }}',
'{{ inlineRedactionConfiguration }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
data_protection_settings_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_protection_settings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_protection_settings resource.
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
    - name: inlineRedactionConfiguration
      description: |
        The configuration for in-session inline redaction.
      value:
        inlineRedactionPatterns:
          - builtInPatternId: "{{ builtInPatternId }}"
            customPattern:
              patternName: "{{ patternName }}"
              patternRegex: "{{ patternRegex }}"
              patternDescription: "{{ patternDescription }}"
              keywordRegex: "{{ keywordRegex }}"
            redactionPlaceHolder:
              redactionPlaceHolderType: "{{ redactionPlaceHolderType }}"
              redactionPlaceHolderText: "{{ redactionPlaceHolderText }}"
            enforcedUrls: "{{ enforcedUrls }}"
            exemptUrls: "{{ exemptUrls }}"
            confidenceLevel: {{ confidenceLevel }}
        globalEnforcedUrls:
          - "{{ globalEnforcedUrls }}"
        globalExemptUrls:
          - "{{ globalExemptUrls }}"
        globalConfidenceLevel: {{ globalConfidenceLevel }}
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_data_protection_settings"
    values={[
        { label: 'associate_data_protection_settings', value: 'associate_data_protection_settings' },
        { label: 'disassociate_data_protection_settings', value: 'disassociate_data_protection_settings' },
        { label: 'update_data_protection_settings', value: 'update_data_protection_settings' }
    ]}
>
<TabItem value="associate_data_protection_settings">

Associates a data protection settings resource with a web portal.

```sql
UPDATE aws.workspaces_web.data_protection_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND dataProtectionSettingsArn = '{{ dataProtectionSettingsArn }}' --required
AND region = '{{ region }}' --required
RETURNING
data_protection_settings_arn,
portal_arn;
```
</TabItem>
<TabItem value="disassociate_data_protection_settings">

Disassociates data protection settings from a web portal.

```sql
UPDATE aws.workspaces_web.data_protection_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_data_protection_settings">

Updates data protection settings.

```sql
UPDATE aws.workspaces_web.data_protection_settings
SET 
inlineRedactionConfiguration = '{{ inlineRedactionConfiguration }}',
displayName = '{{ displayName }}',
description = '{{ description }}',
clientToken = '{{ clientToken }}'
WHERE 
data_protection_settings_arn = '{{ data_protection_settings_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
data_protection_settings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_data_protection_settings"
    values={[
        { label: 'delete_data_protection_settings', value: 'delete_data_protection_settings' }
    ]}
>
<TabItem value="delete_data_protection_settings">

Deletes data protection settings.

```sql
DELETE FROM aws.workspaces_web.data_protection_settings
WHERE data_protection_settings_arn = '{{ data_protection_settings_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
