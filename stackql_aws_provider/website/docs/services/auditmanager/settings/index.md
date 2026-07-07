--- 
title: settings
hide_title: false
hide_table_of_contents: false
keywords:
  - settings
  - auditmanager
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

Creates, updates, deletes, gets or lists a <code>settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.auditmanager.settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_settings"
    values={[
        { label: 'get_settings', value: 'get_settings' }
    ]}
>
<TabItem value="get_settings">

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
    <td><CopyableCode code="defaultAssessmentReportsDestination" /></td>
    <td><code>object</code></td>
    <td>The location where Audit Manager saves assessment reports for the given assessment.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultExportDestination" /></td>
    <td><code>object</code></td>
    <td>The default S3 destination bucket for storing evidence finder exports.</td>
</tr>
<tr>
    <td><CopyableCode code="defaultProcessOwners" /></td>
    <td><code>array</code></td>
    <td>The designated default audit owners.</td>
</tr>
<tr>
    <td><CopyableCode code="deregistrationPolicy" /></td>
    <td><code>object</code></td>
    <td>The deregistration policy for your Audit Manager data. You can use this attribute to determine how your data is handled when you deregister Audit Manager.</td>
</tr>
<tr>
    <td><CopyableCode code="evidenceFinderEnablement" /></td>
    <td><code>object</code></td>
    <td>The current evidence finder status and event data store details.</td>
</tr>
<tr>
    <td><CopyableCode code="isAwsOrgEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether Organizations is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKey" /></td>
    <td><code>string</code></td>
    <td>The KMS key details. (pattern: &lt;code&gt;^arn:.*:kms:.*|DEFAULT&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="snsTopic" /></td>
    <td><code>string</code></td>
    <td>The designated Amazon Simple Notification Service (Amazon SNS) topic. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_\(\)\&#91;\&#93;&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#get_settings"><CopyableCode code="get_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-attribute"><code>attribute</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the settings for a specified Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#update_settings"><CopyableCode code="update_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates Audit Manager settings for the current account.</td>
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
<tr id="parameter-attribute">
    <td><CopyableCode code="attribute" /></td>
    <td><code>string</code></td>
    <td>The list of setting attribute enum values.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_settings"
    values={[
        { label: 'get_settings', value: 'get_settings' }
    ]}
>
<TabItem value="get_settings">

Gets the settings for a specified Amazon Web Services account.

```sql
SELECT
defaultAssessmentReportsDestination,
defaultExportDestination,
defaultProcessOwners,
deregistrationPolicy,
evidenceFinderEnablement,
isAwsOrgEnabled,
kmsKey,
snsTopic
FROM aws.auditmanager.settings
WHERE attribute = '{{ attribute }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_settings"
    values={[
        { label: 'update_settings', value: 'update_settings' }
    ]}
>
<TabItem value="update_settings">

Updates Audit Manager settings for the current account.

```sql
UPDATE aws.auditmanager.settings
SET 
snsTopic = '{{ snsTopic }}',
defaultAssessmentReportsDestination = '{{ defaultAssessmentReportsDestination }}',
defaultProcessOwners = '{{ defaultProcessOwners }}',
kmsKey = '{{ kmsKey }}',
evidenceFinderEnabled = {{ evidenceFinderEnabled }},
deregistrationPolicy = '{{ deregistrationPolicy }}',
defaultExportDestination = '{{ defaultExportDestination }}'
WHERE 
region = '{{ region }}' --required
RETURNING
settings;
```
</TabItem>
</Tabs>
