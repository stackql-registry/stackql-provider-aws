--- 
title: notify_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - notify_templates
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>notify_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notify_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.notify_templates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_notify_templates"
    values={[
        { label: 'describe_notify_templates', value: 'describe_notify_templates' }
    ]}
>
<TabItem value="describe_notify_templates">

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
    <td><CopyableCode code="Channels" /></td>
    <td><code>array</code></td>
    <td>The channels for the template. Supported values are SMS and VOICE.</td>
</tr>
<tr>
    <td><CopyableCode code="Content" /></td>
    <td><code>string</code></td>
    <td>The content of the template.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the notify template was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="LanguageCode" /></td>
    <td><code>string</code></td>
    <td>The language code for the template. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;A-Z&#93;&#123;2&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The current status of the template. (ACTIVE, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedCountries" /></td>
    <td><code>array</code></td>
    <td>An array of supported country codes for the template.</td>
</tr>
<tr>
    <td><CopyableCode code="SupportedVoiceIds" /></td>
    <td><code>array</code></td>
    <td>An array of supported voice IDs for voice templates.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateId" /></td>
    <td><code>string</code></td>
    <td>Template identifier for notify templates. In UpdateNotifyConfiguration, pass UNSET_DEFAULT_TEMPLATE to clear the default template. The UNSET_DEFAULT_TEMPLATE value is only accepted by UpdateNotifyConfiguration. (pattern: &lt;code&gt;(&#91;A-Za-z0-9_-&#93;*|UNSET_DEFAULT_TEMPLATE)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateType" /></td>
    <td><code>string</code></td>
    <td>The type of the template. (OTP_VERIFICATION)</td>
</tr>
<tr>
    <td><CopyableCode code="TierAccess" /></td>
    <td><code>array</code></td>
    <td>The tier access level for the template.</td>
</tr>
<tr>
    <td><CopyableCode code="Variables" /></td>
    <td><code>object</code></td>
    <td>An array of template variable metadata for the template.</td>
</tr>
<tr>
    <td><CopyableCode code="Version" /></td>
    <td><code>integer</code></td>
    <td>The version of the template.</td>
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
    <td><a href="#describe_notify_templates"><CopyableCode code="describe_notify_templates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified notify templates or all notify templates in your account. If you specify template IDs, the output includes information for only the specified notify templates. If you specify filters, the output includes information for only those notify templates that meet the filter criteria. If you don't specify template IDs or filters, the output includes information for all notify templates. If you specify a template ID that isn't valid, an error is returned.</td>
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
    defaultValue="describe_notify_templates"
    values={[
        { label: 'describe_notify_templates', value: 'describe_notify_templates' }
    ]}
>
<TabItem value="describe_notify_templates">

Describes the specified notify templates or all notify templates in your account. If you specify template IDs, the output includes information for only the specified notify templates. If you specify filters, the output includes information for only those notify templates that meet the filter criteria. If you don't specify template IDs or filters, the output includes information for all notify templates. If you specify a template ID that isn't valid, an error is returned.

```sql
SELECT
Channels,
Content,
CreatedTimestamp,
LanguageCode,
Status,
SupportedCountries,
SupportedVoiceIds,
TemplateId,
TemplateType,
TierAccess,
Variables,
Version
FROM aws.pinpoint_sms_voice_v2.notify_templates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
