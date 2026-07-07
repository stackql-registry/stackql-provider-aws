--- 
title: user_access_logging_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - user_access_logging_settings
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

Creates, updates, deletes, gets or lists a <code>user_access_logging_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_access_logging_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workspaces_web.user_access_logging_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_user_access_logging_settings"
    values={[
        { label: 'get_user_access_logging_settings', value: 'get_user_access_logging_settings' },
        { label: 'list_user_access_logging_settings', value: 'list_user_access_logging_settings' }
    ]}
>
<TabItem value="get_user_access_logging_settings">

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
    <td><CopyableCode code="associatedPortalArns" /></td>
    <td><code>array</code></td>
    <td>A list of web portal ARNs that this user access logging settings is associated with.</td>
</tr>
<tr>
    <td><CopyableCode code="kinesisStreamArn" /></td>
    <td><code>string</code></td>
    <td>Kinesis stream ARN to which log events are published. (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:kinesis:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:stream/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="userAccessLoggingSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user access logging settings. (pattern: &lt;code&gt;arn:&#91;\w+=\/,.@-&#93;+:&#91;a-zA-Z0-9\-&#93;+:&#91;a-zA-Z0-9\-&#93;*:&#91;a-zA-Z0-9&#93;&#123;1,12&#125;:&#91;a-zA-Z&#93;+(\/&#91;a-fA-F0-9\-&#93;&#123;36&#125;)+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_user_access_logging_settings">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The pagination token used to retrieve the next page of results for this operation. (pattern: &lt;code&gt;\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="userAccessLoggingSettings" /></td>
    <td><code>array</code></td>
    <td>The user access logging settings.</td>
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
    <td><a href="#get_user_access_logging_settings"><CopyableCode code="get_user_access_logging_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-user_access_logging_settings_arn"><code>user_access_logging_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets user access logging settings.</td>
</tr>
<tr>
    <td><a href="#list_user_access_logging_settings"><CopyableCode code="list_user_access_logging_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a list of user access logging settings.</td>
</tr>
<tr>
    <td><a href="#create_user_access_logging_settings"><CopyableCode code="create_user_access_logging_settings" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-kinesisStreamArn"><code>kinesisStreamArn</code></a></td>
    <td></td>
    <td>Creates a user access logging settings resource that can be associated with a web portal.</td>
</tr>
<tr>
    <td><a href="#associate_user_access_logging_settings"><CopyableCode code="associate_user_access_logging_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-userAccessLoggingSettingsArn"><code>userAccessLoggingSettingsArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a user access logging settings resource with a web portal.</td>
</tr>
<tr>
    <td><a href="#disassociate_user_access_logging_settings"><CopyableCode code="disassociate_user_access_logging_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-portal_arn"><code>portal_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates user access logging settings from a web portal.</td>
</tr>
<tr>
    <td><a href="#update_user_access_logging_settings"><CopyableCode code="update_user_access_logging_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-user_access_logging_settings_arn"><code>user_access_logging_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the user access logging settings.</td>
</tr>
<tr>
    <td><a href="#delete_user_access_logging_settings"><CopyableCode code="delete_user_access_logging_settings" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-user_access_logging_settings_arn"><code>user_access_logging_settings_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes user access logging settings.</td>
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
<tr id="parameter-userAccessLoggingSettingsArn">
    <td><CopyableCode code="userAccessLoggingSettingsArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user access logging settings.</td>
</tr>
<tr id="parameter-user_access_logging_settings_arn">
    <td><CopyableCode code="user_access_logging_settings_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the user access logging settings.</td>
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
    defaultValue="get_user_access_logging_settings"
    values={[
        { label: 'get_user_access_logging_settings', value: 'get_user_access_logging_settings' },
        { label: 'list_user_access_logging_settings', value: 'list_user_access_logging_settings' }
    ]}
>
<TabItem value="get_user_access_logging_settings">

Gets user access logging settings.

```sql
SELECT
associatedPortalArns,
kinesisStreamArn,
userAccessLoggingSettingsArn
FROM aws.workspaces_web.user_access_logging_settings
WHERE user_access_logging_settings_arn = '{{ user_access_logging_settings_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_user_access_logging_settings">

Retrieves a list of user access logging settings.

```sql
SELECT
nextToken,
userAccessLoggingSettings
FROM aws.workspaces_web.user_access_logging_settings
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_user_access_logging_settings"
    values={[
        { label: 'create_user_access_logging_settings', value: 'create_user_access_logging_settings' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_user_access_logging_settings">

Creates a user access logging settings resource that can be associated with a web portal.

```sql
INSERT INTO aws.workspaces_web.user_access_logging_settings (
kinesisStreamArn,
tags,
clientToken,
region
)
SELECT 
'{{ kinesisStreamArn }}' /* required */,
'{{ tags }}',
'{{ clientToken }}',
'{{ region }}'
RETURNING
userAccessLoggingSettingsArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_access_logging_settings
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the user_access_logging_settings resource.
    - name: kinesisStreamArn
      value: "{{ kinesisStreamArn }}"
      description: |
        Kinesis stream ARN to which log events are published.
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_user_access_logging_settings"
    values={[
        { label: 'associate_user_access_logging_settings', value: 'associate_user_access_logging_settings' },
        { label: 'disassociate_user_access_logging_settings', value: 'disassociate_user_access_logging_settings' },
        { label: 'update_user_access_logging_settings', value: 'update_user_access_logging_settings' }
    ]}
>
<TabItem value="associate_user_access_logging_settings">

Associates a user access logging settings resource with a web portal.

```sql
UPDATE aws.workspaces_web.user_access_logging_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND userAccessLoggingSettingsArn = '{{ userAccessLoggingSettingsArn }}' --required
AND region = '{{ region }}' --required
RETURNING
portalArn,
userAccessLoggingSettingsArn;
```
</TabItem>
<TabItem value="disassociate_user_access_logging_settings">

Disassociates user access logging settings from a web portal.

```sql
UPDATE aws.workspaces_web.user_access_logging_settings
SET 
-- No updatable properties
WHERE 
portal_arn = '{{ portal_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_user_access_logging_settings">

Updates the user access logging settings.

```sql
UPDATE aws.workspaces_web.user_access_logging_settings
SET 
kinesisStreamArn = '{{ kinesisStreamArn }}',
clientToken = '{{ clientToken }}'
WHERE 
user_access_logging_settings_arn = '{{ user_access_logging_settings_arn }}' --required
AND region = '{{ region }}' --required
RETURNING
userAccessLoggingSettings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_user_access_logging_settings"
    values={[
        { label: 'delete_user_access_logging_settings', value: 'delete_user_access_logging_settings' }
    ]}
>
<TabItem value="delete_user_access_logging_settings">

Deletes user access logging settings.

```sql
DELETE FROM aws.workspaces_web.user_access_logging_settings
WHERE user_access_logging_settings_arn = '{{ user_access_logging_settings_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
