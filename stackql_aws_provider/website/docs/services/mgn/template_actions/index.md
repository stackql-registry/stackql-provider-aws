--- 
title: template_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - template_actions
  - mgn
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

Creates, updates, deletes, gets or lists a <code>template_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mgn.template_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_template_actions"
    values={[
        { label: 'list_template_actions', value: 'list_template_actions' }
    ]}
>
<TabItem value="list_template_actions">

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
    <td><CopyableCode code="action_id" /></td>
    <td><code>string</code></td>
    <td>Template post migration custom action ID. (pattern: &lt;code&gt;.*&#91;0-9a-zA-Z&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="action_name" /></td>
    <td><code>string</code></td>
    <td>Template post migration custom action name.</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Template post migration custom action active status.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Template post migration custom action category. (DISASTER_RECOVERY, OPERATING_SYSTEM, LICENSE_AND_SUBSCRIPTION, VALIDATION, OBSERVABILITY, REFACTORING, SECURITY, NETWORKING, CONFIGURATION, BACKUP, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Template post migration custom action description. (pattern: &lt;code&gt;&#91;0-9a-zA-Z ():/.,'-_#*; &#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="document_identifier" /></td>
    <td><code>string</code></td>
    <td>Template post migration custom action document identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="document_version" /></td>
    <td><code>string</code></td>
    <td>Template post migration custom action document version. (pattern: &lt;code&gt;(\$DEFAULT|\$LATEST|&#91;0-9&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="external_parameters" /></td>
    <td><code>object</code></td>
    <td>Template post migration custom action external parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="must_succeed_for_cutover" /></td>
    <td><code>boolean</code></td>
    <td>Template post migration custom action must succeed for cutover.</td>
</tr>
<tr>
    <td><CopyableCode code="operating_system" /></td>
    <td><code>string</code></td>
    <td>Operating system eligible for this template post migration custom action. (pattern: &lt;code&gt;(linux|windows)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="order" /></td>
    <td><code>integer</code></td>
    <td>Template post migration custom action order.</td>
</tr>
<tr>
    <td><CopyableCode code="parameters" /></td>
    <td><code>object</code></td>
    <td>Template post migration custom action parameters.</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_seconds" /></td>
    <td><code>integer</code></td>
    <td>Template post migration custom action timeout in seconds.</td>
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
    <td><a href="#list_template_actions"><CopyableCode code="list_template_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>List template post migration custom actions.</td>
</tr>
<tr>
    <td><a href="#remove_template_action"><CopyableCode code="remove_template_action" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-launchConfigurationTemplateID"><code>launchConfigurationTemplateID</code></a>, <a href="#parameter-actionID"><code>actionID</code></a></td>
    <td></td>
    <td>Remove template post migration custom action.</td>
</tr>
<tr>
    <td><a href="#put_template_action"><CopyableCode code="put_template_action" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-launchConfigurationTemplateID"><code>launchConfigurationTemplateID</code></a>, <a href="#parameter-actionName"><code>actionName</code></a>, <a href="#parameter-documentIdentifier"><code>documentIdentifier</code></a>, <a href="#parameter-order"><code>order</code></a>, <a href="#parameter-actionID"><code>actionID</code></a></td>
    <td></td>
    <td>Put template post migration custom action.</td>
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
    defaultValue="list_template_actions"
    values={[
        { label: 'list_template_actions', value: 'list_template_actions' }
    ]}
>
<TabItem value="list_template_actions">

List template post migration custom actions.

```sql
SELECT
action_id,
action_name,
active,
category,
description,
document_identifier,
document_version,
external_parameters,
must_succeed_for_cutover,
operating_system,
order,
parameters,
timeout_seconds
FROM aws.mgn.template_actions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="remove_template_action"
    values={[
        { label: 'remove_template_action', value: 'remove_template_action' }
    ]}
>
<TabItem value="remove_template_action">

Remove template post migration custom action.

```sql
UPDATE aws.mgn.template_actions
SET 
launchConfigurationTemplateID = '{{ launchConfigurationTemplateID }}',
actionID = '{{ actionID }}'
WHERE 
region = '{{ region }}' --required
AND launchConfigurationTemplateID = '{{ launchConfigurationTemplateID }}' --required
AND actionID = '{{ actionID }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_template_action"
    values={[
        { label: 'put_template_action', value: 'put_template_action' }
    ]}
>
<TabItem value="put_template_action">

Put template post migration custom action.

```sql
REPLACE aws.mgn.template_actions
SET 
launchConfigurationTemplateID = '{{ launchConfigurationTemplateID }}',
actionName = '{{ actionName }}',
documentIdentifier = '{{ documentIdentifier }}',
order = {{ order }},
actionID = '{{ actionID }}',
documentVersion = '{{ documentVersion }}',
active = {{ active }},
timeoutSeconds = {{ timeoutSeconds }},
mustSucceedForCutover = {{ mustSucceedForCutover }},
parameters = '{{ parameters }}',
operatingSystem = '{{ operatingSystem }}',
externalParameters = '{{ externalParameters }}',
description = '{{ description }}',
category = '{{ category }}'
WHERE 
region = '{{ region }}' --required
AND launchConfigurationTemplateID = '{{ launchConfigurationTemplateID }}' --required
AND actionName = '{{ actionName }}' --required
AND documentIdentifier = '{{ documentIdentifier }}' --required
AND order = '{{ order }}' --required
AND actionID = '{{ actionID }}' --required
RETURNING
action_id,
action_name,
active,
category,
description,
document_identifier,
document_version,
external_parameters,
must_succeed_for_cutover,
operating_system,
order,
parameters,
timeout_seconds;
```
</TabItem>
</Tabs>
