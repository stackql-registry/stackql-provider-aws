--- 
title: response_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - response_plans
  - ssm_incidents
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

Creates, updates, deletes, gets or lists a <code>response_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="response_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ssm_incidents.response_plans" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_response_plan"
    values={[
        { label: 'get_response_plan', value: 'get_response_plan' },
        { label: 'list_response_plans', value: 'list_response_plans' }
    ]}
>
<TabItem value="get_response_plan">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The short format name of the response plan. The name can't contain spaces. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actions" /></td>
    <td><code>array</code></td>
    <td>The actions that this response plan takes at the beginning of the incident.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the response plan. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;*:(&#91;0-9&#93;&#123;12&#125;)?:.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="chat_channel" /></td>
    <td><code>object</code></td>
    <td>The Chatbot chat channel used for collaboration during an incident.</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The long format name of the response plan. Can contain spaces.</td>
</tr>
<tr>
    <td><CopyableCode code="engagements" /></td>
    <td><code>array</code></td>
    <td>The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident.</td>
</tr>
<tr>
    <td><CopyableCode code="incident_template" /></td>
    <td><code>object</code></td>
    <td>Basic details used in creating a response plan. The response plan is then used to create an incident record.</td>
</tr>
<tr>
    <td><CopyableCode code="integrations" /></td>
    <td><code>array</code></td>
    <td>Information about third-party services integrated into the Incident Manager response plan.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_response_plans">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the response plan. This can't include spaces. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-_&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the response plan. (pattern: &lt;code&gt;^arn:aws(-cn|-us-gov)?:&#91;a-z0-9-&#93;*:&#91;a-z0-9-&#93;*:(&#91;0-9&#93;&#123;12&#125;)?:.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>The human readable name of the response plan. This can include spaces.</td>
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
    <td><a href="#get_response_plan"><CopyableCode code="get_response_plan" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-arn"><code>arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of the specified response plan.</td>
</tr>
<tr>
    <td><a href="#list_response_plans"><CopyableCode code="list_response_plans" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all response plans in your account.</td>
</tr>
<tr>
    <td><a href="#create_response_plan"><CopyableCode code="create_response_plan" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-incidentTemplate"><code>incidentTemplate</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.</td>
</tr>
<tr>
    <td><a href="#update_response_plan"><CopyableCode code="update_response_plan" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates the specified response plan.</td>
</tr>
<tr>
    <td><a href="#delete_response_plan"><CopyableCode code="delete_response_plan" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.</td>
</tr>
<tr>
    <td><a href="#start_incident"><CopyableCode code="start_incident" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-responsePlanArn"><code>responsePlanArn</code></a></td>
    <td></td>
    <td>Used to start an incident from CloudWatch alarms, EventBridge events, or manually.</td>
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
<tr id="parameter-arn">
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the response plan.</td>
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
    defaultValue="get_response_plan"
    values={[
        { label: 'get_response_plan', value: 'get_response_plan' },
        { label: 'list_response_plans', value: 'list_response_plans' }
    ]}
>
<TabItem value="get_response_plan">

Retrieves the details of the specified response plan.

```sql
SELECT
name,
actions,
arn,
chat_channel,
display_name,
engagements,
incident_template,
integrations
FROM aws.ssm_incidents.response_plans
WHERE arn = '{{ arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_response_plans">

Lists all response plans in your account.

```sql
SELECT
name,
arn,
display_name
FROM aws.ssm_incidents.response_plans
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_response_plan"
    values={[
        { label: 'create_response_plan', value: 'create_response_plan' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_response_plan">

Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.

```sql
INSERT INTO aws.ssm_incidents.response_plans (
actions,
chatChannel,
clientToken,
displayName,
engagements,
incidentTemplate,
integrations,
name,
tags,
region
)
SELECT 
'{{ actions }}',
'{{ chatChannel }}',
'{{ clientToken }}',
'{{ displayName }}',
'{{ engagements }}',
'{{ incidentTemplate }}' /* required */,
'{{ integrations }}',
'{{ name }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: response_plans
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the response_plans resource.
    - name: actions
      value:
        - ssmAutomation:
            documentName: "{{ documentName }}"
            documentVersion: "{{ documentVersion }}"
            dynamicParameters: "{{ dynamicParameters }}"
            parameters: "{{ parameters }}"
            roleArn: "{{ roleArn }}"
            targetAccount: "{{ targetAccount }}"
    - name: chatChannel
      description: |
        The Chatbot chat channel used for collaboration during an incident.
      value:
        chatbotSns:
          - "{{ chatbotSns }}"
        empty: "{{ empty }}"
    - name: clientToken
      value: "{{ clientToken }}"
    - name: displayName
      value: "{{ displayName }}"
    - name: engagements
      value:
        - "{{ engagements }}"
    - name: incidentTemplate
      description: |
        Basic details used in creating a response plan. The response plan is then used to create an incident record.
      value:
        dedupeString: "{{ dedupeString }}"
        impact: {{ impact }}
        incidentTags: "{{ incidentTags }}"
        notificationTargets:
          - snsTopicArn: "{{ snsTopicArn }}"
        summary: "{{ summary }}"
        title_: "{{ title_ }}"
    - name: integrations
      value:
        - pagerDutyConfiguration:
            name: "{{ name }}"
            pagerDutyIncidentConfiguration:
              serviceId: "{{ serviceId }}"
            secretId: "{{ secretId }}"
    - name: name
      value: "{{ name }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_response_plan"
    values={[
        { label: 'update_response_plan', value: 'update_response_plan' }
    ]}
>
<TabItem value="update_response_plan">

Updates the specified response plan.

```sql
UPDATE aws.ssm_incidents.response_plans
SET 
actions = '{{ actions }}',
arn = '{{ arn }}',
chatChannel = '{{ chatChannel }}',
clientToken = '{{ clientToken }}',
displayName = '{{ displayName }}',
engagements = '{{ engagements }}',
incidentTemplateDedupeString = '{{ incidentTemplateDedupeString }}',
incidentTemplateImpact = {{ incidentTemplateImpact }},
incidentTemplateNotificationTargets = '{{ incidentTemplateNotificationTargets }}',
incidentTemplateSummary = '{{ incidentTemplateSummary }}',
incidentTemplateTags = '{{ incidentTemplateTags }}',
incidentTemplateTitle = '{{ incidentTemplateTitle }}',
integrations = '{{ integrations }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_response_plan"
    values={[
        { label: 'delete_response_plan', value: 'delete_response_plan' }
    ]}
>
<TabItem value="delete_response_plan">

Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.

```sql
DELETE FROM aws.ssm_incidents.response_plans
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_incident"
    values={[
        { label: 'start_incident', value: 'start_incident' }
    ]}
>
<TabItem value="start_incident">

Used to start an incident from CloudWatch alarms, EventBridge events, or manually.

```sql
EXEC aws.ssm_incidents.response_plans.start_incident 
@region='{{ region }}' --required 
@@json=
'{
"clientToken": "{{ clientToken }}", 
"impact": {{ impact }}, 
"relatedItems": "{{ relatedItems }}", 
"responsePlanArn": "{{ responsePlanArn }}", 
"title": "{{ title }}", 
"triggerDetails": "{{ triggerDetails }}"
}'
;
```
</TabItem>
</Tabs>
