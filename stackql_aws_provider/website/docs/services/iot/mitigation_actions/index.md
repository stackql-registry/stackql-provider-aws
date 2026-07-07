--- 
title: mitigation_actions
hide_title: false
hide_table_of_contents: false
keywords:
  - mitigation_actions
  - iot
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

Creates, updates, deletes, gets or lists a <code>mitigation_actions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mitigation_actions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot.mitigation_actions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_mitigation_action"
    values={[
        { label: 'describe_mitigation_action', value: 'describe_mitigation_action' },
        { label: 'list_mitigation_actions', value: 'list_mitigation_actions' }
    ]}
>
<TabItem value="describe_mitigation_action">

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
    <td><CopyableCode code="actionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN that identifies this migration action.</td>
</tr>
<tr>
    <td><CopyableCode code="actionId" /></td>
    <td><code>string</code></td>
    <td>A unique identifier for this action.</td>
</tr>
<tr>
    <td><CopyableCode code="actionName" /></td>
    <td><code>string</code></td>
    <td>The friendly name that uniquely identifies the mitigation action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actionParams" /></td>
    <td><code>object</code></td>
    <td>The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).</td>
</tr>
<tr>
    <td><CopyableCode code="actionType" /></td>
    <td><code>string</code></td>
    <td>The type of mitigation action. (UPDATE_DEVICE_CERTIFICATE, UPDATE_CA_CERTIFICATE, ADD_THINGS_TO_THING_GROUP, REPLACE_DEFAULT_POLICY_VERSION, ENABLE_IOT_LOGGING, PUBLISH_FINDING_TO_SNS)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the mitigation action was added to your Amazon Web Services accounts.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the mitigation action was last changed.</td>
</tr>
<tr>
    <td><CopyableCode code="roleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM role used to apply this action.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_mitigation_actions">

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
    <td><CopyableCode code="actionArn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN used to apply this mitigation action.</td>
</tr>
<tr>
    <td><CopyableCode code="actionName" /></td>
    <td><code>string</code></td>
    <td>The friendly name of the mitigation action. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when this mitigation action was created.</td>
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
    <td><a href="#describe_mitigation_action"><CopyableCode code="describe_mitigation_action" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-action_name"><code>action_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a mitigation action. Requires permission to access the DescribeMitigationAction action.</td>
</tr>
<tr>
    <td><a href="#list_mitigation_actions"><CopyableCode code="list_mitigation_actions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-actionType"><code>actionType</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets a list of all mitigation actions that match the specified filter criteria. Requires permission to access the ListMitigationActions action.</td>
</tr>
<tr>
    <td><a href="#create_mitigation_action"><CopyableCode code="create_mitigation_action" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-action_name"><code>action_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-roleArn"><code>roleArn</code></a>, <a href="#parameter-actionParams"><code>actionParams</code></a></td>
    <td></td>
    <td>Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see Mitigation actions. Each mitigation action can apply only one type of change. Requires permission to access the CreateMitigationAction action.</td>
</tr>
<tr>
    <td><a href="#update_mitigation_action"><CopyableCode code="update_mitigation_action" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-action_name"><code>action_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the definition for the specified mitigation action. Requires permission to access the UpdateMitigationAction action.</td>
</tr>
<tr>
    <td><a href="#delete_mitigation_action"><CopyableCode code="delete_mitigation_action" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-action_name"><code>action_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a defined mitigation action from your Amazon Web Services accounts. Requires permission to access the DeleteMitigationAction action.</td>
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
<tr id="parameter-action_name">
    <td><CopyableCode code="action_name" /></td>
    <td><code>string</code></td>
    <td>The name of the mitigation action that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-actionType">
    <td><CopyableCode code="actionType" /></td>
    <td><code>string</code></td>
    <td>Specify a value to limit the result to mitigation actions with a specific action type.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return at one time. The default is 25.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_mitigation_action"
    values={[
        { label: 'describe_mitigation_action', value: 'describe_mitigation_action' },
        { label: 'list_mitigation_actions', value: 'list_mitigation_actions' }
    ]}
>
<TabItem value="describe_mitigation_action">

Gets information about a mitigation action. Requires permission to access the DescribeMitigationAction action.

```sql
SELECT
actionArn,
actionId,
actionName,
actionParams,
actionType,
creationDate,
lastModifiedDate,
roleArn
FROM aws.iot.mitigation_actions
WHERE action_name = '{{ action_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_mitigation_actions">

Gets a list of all mitigation actions that match the specified filter criteria. Requires permission to access the ListMitigationActions action.

```sql
SELECT
actionArn,
actionName,
creationDate
FROM aws.iot.mitigation_actions
WHERE region = '{{ region }}' -- required
AND actionType = '{{ actionType }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_mitigation_action"
    values={[
        { label: 'create_mitigation_action', value: 'create_mitigation_action' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_mitigation_action">

Defines an action that can be applied to audit findings by using StartAuditMitigationActionsTask. Only certain types of mitigation actions can be applied to specific check names. For more information, see Mitigation actions. Each mitigation action can apply only one type of change. Requires permission to access the CreateMitigationAction action.

```sql
INSERT INTO aws.iot.mitigation_actions (
roleArn,
actionParams,
tags,
action_name,
region
)
SELECT 
'{{ roleArn }}' /* required */,
'{{ actionParams }}' /* required */,
'{{ tags }}',
'{{ action_name }}',
'{{ region }}'
RETURNING
actionArn,
actionId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mitigation_actions
  props:
    - name: action_name
      value: "{{ action_name }}"
      description: Required parameter for the mitigation_actions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the mitigation_actions resource.
    - name: roleArn
      value: "{{ roleArn }}"
    - name: actionParams
      description: |
        The set of parameters for this mitigation action. You can specify only one type of parameter (in other words, you can apply only one action for each defined mitigation action).
      value:
        updateDeviceCertificateParams:
          action: "{{ action }}"
        updateCACertificateParams:
          action: "{{ action }}"
        addThingsToThingGroupParams:
          thingGroupNames:
            - "{{ thingGroupNames }}"
          overrideDynamicGroups: {{ overrideDynamicGroups }}
        replaceDefaultPolicyVersionParams:
          templateName: "{{ templateName }}"
        enableIoTLoggingParams:
          roleArnForLogging: "{{ roleArnForLogging }}"
          logLevel: "{{ logLevel }}"
        publishFindingToSnsParams:
          topicArn: "{{ topicArn }}"
    - name: tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_mitigation_action"
    values={[
        { label: 'update_mitigation_action', value: 'update_mitigation_action' }
    ]}
>
<TabItem value="update_mitigation_action">

Updates the definition for the specified mitigation action. Requires permission to access the UpdateMitigationAction action.

```sql
UPDATE aws.iot.mitigation_actions
SET 
roleArn = '{{ roleArn }}',
actionParams = '{{ actionParams }}'
WHERE 
action_name = '{{ action_name }}' --required
AND region = '{{ region }}' --required
RETURNING
actionArn,
actionId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_mitigation_action"
    values={[
        { label: 'delete_mitigation_action', value: 'delete_mitigation_action' }
    ]}
>
<TabItem value="delete_mitigation_action">

Deletes a defined mitigation action from your Amazon Web Services accounts. Requires permission to access the DeleteMitigationAction action.

```sql
DELETE FROM aws.iot.mitigation_actions
WHERE action_name = '{{ action_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
