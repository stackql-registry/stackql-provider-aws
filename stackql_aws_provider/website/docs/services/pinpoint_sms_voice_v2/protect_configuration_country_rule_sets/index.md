--- 
title: protect_configuration_country_rule_sets
hide_title: false
hide_table_of_contents: false
keywords:
  - protect_configuration_country_rule_sets
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

Creates, updates, deletes, gets or lists a <code>protect_configuration_country_rule_sets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="protect_configuration_country_rule_sets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.protect_configuration_country_rule_sets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_protect_configuration_country_rule_set"
    values={[
        { label: 'get_protect_configuration_country_rule_set', value: 'get_protect_configuration_country_rule_set' }
    ]}
>
<TabItem value="get_protect_configuration_country_rule_set">

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
    <td><CopyableCode code="CountryRuleSet" /></td>
    <td><code>object</code></td>
    <td>A map of ProtectConfigurationCountryRuleSetInformation objects that contain the details for the requested NumberCapability. The Key is the two-letter ISO country code. For a list of supported ISO country codes, see Supported countries and regions (SMS channel) in the End User Messaging SMS User Guide.</td>
</tr>
<tr>
    <td><CopyableCode code="NumberCapability" /></td>
    <td><code>string</code></td>
    <td>The capability type associated with the returned ProtectConfigurationCountryRuleSetInformation objects. (SMS, VOICE, MMS, RCS)</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectConfigurationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the protect configuration. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ProtectConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the protect configuration. (pattern: &lt;code&gt;&#91;A-Za-z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_protect_configuration_country_rule_set"><CopyableCode code="get_protect_configuration_country_rule_set" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the CountryRuleSet for the specified NumberCapability from a protect configuration.</td>
</tr>
<tr>
    <td><a href="#update_protect_configuration_country_rule_set"><CopyableCode code="update_protect_configuration_country_rule_set" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProtectConfigurationId"><code>ProtectConfigurationId</code></a>, <a href="#parameter-NumberCapability"><code>NumberCapability</code></a>, <a href="#parameter-CountryRuleSetUpdates"><code>CountryRuleSetUpdates</code></a></td>
    <td></td>
    <td>Update a country rule set to ALLOW, BLOCK, MONITOR, or FILTER messages to be sent to the specified destination counties. You can update one or multiple countries at a time. The updates are only applied to the specified NumberCapability type.</td>
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
    defaultValue="get_protect_configuration_country_rule_set"
    values={[
        { label: 'get_protect_configuration_country_rule_set', value: 'get_protect_configuration_country_rule_set' }
    ]}
>
<TabItem value="get_protect_configuration_country_rule_set">

Retrieve the CountryRuleSet for the specified NumberCapability from a protect configuration.

```sql
SELECT
CountryRuleSet,
NumberCapability,
ProtectConfigurationArn,
ProtectConfigurationId
FROM aws.pinpoint_sms_voice_v2.protect_configuration_country_rule_sets
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_protect_configuration_country_rule_set"
    values={[
        { label: 'update_protect_configuration_country_rule_set', value: 'update_protect_configuration_country_rule_set' }
    ]}
>
<TabItem value="update_protect_configuration_country_rule_set">

Update a country rule set to ALLOW, BLOCK, MONITOR, or FILTER messages to be sent to the specified destination counties. You can update one or multiple countries at a time. The updates are only applied to the specified NumberCapability type.

```sql
UPDATE aws.pinpoint_sms_voice_v2.protect_configuration_country_rule_sets
SET 
ProtectConfigurationId = '{{ ProtectConfigurationId }}',
NumberCapability = '{{ NumberCapability }}',
CountryRuleSetUpdates = '{{ CountryRuleSetUpdates }}'
WHERE 
region = '{{ region }}' --required
AND ProtectConfigurationId = '{{ ProtectConfigurationId }}' --required
AND NumberCapability = '{{ NumberCapability }}' --required
AND CountryRuleSetUpdates = '{{ CountryRuleSetUpdates }}' --required
RETURNING
CountryRuleSet,
NumberCapability,
ProtectConfigurationArn,
ProtectConfigurationId;
```
</TabItem>
</Tabs>
