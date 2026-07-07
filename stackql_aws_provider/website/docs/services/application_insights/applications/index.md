--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - application_insights
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

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.application_insights.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application"
    values={[
        { label: 'describe_application', value: 'describe_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="describe_application">

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
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the owner of the application. (pattern: &lt;code&gt;^\d&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="AttachMissingPermission" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing.</td>
</tr>
<tr>
    <td><CopyableCode code="AutoConfigEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether auto-configuration is turned on for this application.</td>
</tr>
<tr>
    <td><CopyableCode code="CWEMonitorEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as instance terminated, failed deployment, and others.</td>
</tr>
<tr>
    <td><CopyableCode code="DiscoveryType" /></td>
    <td><code>string</code></td>
    <td>The method used by Application Insights to onboard your resources. (RESOURCE_GROUP_BASED, ACCOUNT_BASED)</td>
</tr>
<tr>
    <td><CopyableCode code="LifeCycle" /></td>
    <td><code>string</code></td>
    <td>The lifecycle of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="OpsCenterEnabled" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether Application Insights will create opsItems for any problem detected by Application Insights for an application.</td>
</tr>
<tr>
    <td><CopyableCode code="OpsItemSNSTopicArn" /></td>
    <td><code>string</code></td>
    <td>The SNS topic provided to Application Insights that is associated to the created opsItems to receive SNS notifications for opsItem updates. (pattern: &lt;code&gt;^arn:aws(-\w+)*:&#91;\w\d-&#93;+:(&#91;\w\d-&#93;*)?:&#91;\w\d_-&#93;*(&#91;:/&#93;.+)*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Remarks" /></td>
    <td><code>string</code></td>
    <td>The issues on the user side that block Application Insights from successfully monitoring an application. Example remarks include: “Configuring application, detected 1 Errors, 3 Warnings” “Configuring application, detected 1 Unconfigured Components”</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource group used for the application. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\.\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SNSNotificationArn" /></td>
    <td><code>string</code></td>
    <td>The SNS topic ARN that is associated with SNS notifications for updates or issues. (pattern: &lt;code&gt;^arn:aws(-\w+)*:&#91;\w\d-&#93;+:(&#91;\w\d-&#93;*)?:&#91;\w\d_-&#93;*(&#91;:/&#93;.+)*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

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
    <td><CopyableCode code="ApplicationInfoList" /></td>
    <td><code>array</code></td>
    <td>The list of applications.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results. This value is null when there are no more results to return. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
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
    <td><a href="#describe_application"><CopyableCode code="describe_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the application.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the IDs of the applications that you are monitoring.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds an application that is created from a resource group.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ResourceGroupName"><code>ResourceGroupName</code></a></td>
    <td></td>
    <td>Updates the application.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes the specified application from monitoring. Does not delete the application.</td>
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
    defaultValue="describe_application"
    values={[
        { label: 'describe_application', value: 'describe_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="describe_application">

Describes the application.

```sql
SELECT
AccountId,
AttachMissingPermission,
AutoConfigEnabled,
CWEMonitorEnabled,
DiscoveryType,
LifeCycle,
OpsCenterEnabled,
OpsItemSNSTopicArn,
Remarks,
ResourceGroupName,
SNSNotificationArn
FROM aws.application_insights.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Lists the IDs of the applications that you are monitoring.

```sql
SELECT
ApplicationInfoList,
NextToken
FROM aws.application_insights.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Adds an application that is created from a resource group.

```sql
INSERT INTO aws.application_insights.applications (
ResourceGroupName,
OpsCenterEnabled,
CWEMonitorEnabled,
OpsItemSNSTopicArn,
SNSNotificationArn,
Tags,
AutoConfigEnabled,
AutoCreate,
GroupingType,
AttachMissingPermission,
region
)
SELECT 
'{{ ResourceGroupName }}',
{{ OpsCenterEnabled }},
{{ CWEMonitorEnabled }},
'{{ OpsItemSNSTopicArn }}',
'{{ SNSNotificationArn }}',
'{{ Tags }}',
{{ AutoConfigEnabled }},
{{ AutoCreate }},
'{{ GroupingType }}',
{{ AttachMissingPermission }},
'{{ region }}'
RETURNING
ApplicationInfo
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: ResourceGroupName
      value: "{{ ResourceGroupName }}"
      description: |
        The name of the resource group.
    - name: OpsCenterEnabled
      value: {{ OpsCenterEnabled }}
      description: |
        When set to true, creates opsItems for any problems detected on an application.
    - name: CWEMonitorEnabled
      value: {{ CWEMonitorEnabled }}
      description: |
        Indicates whether Application Insights can listen to CloudWatch events for the application resources, such as instance terminated, failed deployment, and others.
    - name: OpsItemSNSTopicArn
      value: "{{ OpsItemSNSTopicArn }}"
      description: |
        The SNS topic provided to Application Insights that is associated to the created opsItem. Allows you to receive notifications for updates to the opsItem.
    - name: SNSNotificationArn
      value: "{{ SNSNotificationArn }}"
      description: |
        The SNS notification topic ARN.
    - name: Tags
      description: |
        List of tags to add to the application. tag key (Key) and an associated tag value (Value). The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: AutoConfigEnabled
      value: {{ AutoConfigEnabled }}
      description: |
        Indicates whether Application Insights automatically configures unmonitored resources in the resource group.
    - name: AutoCreate
      value: {{ AutoCreate }}
      description: |
        Configures all of the resources in the resource group by applying the recommended configurations.
    - name: GroupingType
      value: "{{ GroupingType }}"
      description: |
        Application Insights can create applications based on a resource group or on an account. To create an account-based application using all of the resources in the account, set this parameter to ACCOUNT_BASED.
      valid_values: ['ACCOUNT_BASED']
    - name: AttachMissingPermission
      value: {{ AttachMissingPermission }}
      description: |
        If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application"
    values={[
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="update_application">

Updates the application.

```sql
UPDATE aws.application_insights.applications
SET 
ResourceGroupName = '{{ ResourceGroupName }}',
OpsCenterEnabled = {{ OpsCenterEnabled }},
CWEMonitorEnabled = {{ CWEMonitorEnabled }},
OpsItemSNSTopicArn = '{{ OpsItemSNSTopicArn }}',
SNSNotificationArn = '{{ SNSNotificationArn }}',
RemoveSNSTopic = {{ RemoveSNSTopic }},
AutoConfigEnabled = {{ AutoConfigEnabled }},
AttachMissingPermission = {{ AttachMissingPermission }}
WHERE 
region = '{{ region }}' --required
AND ResourceGroupName = '{{ ResourceGroupName }}' --required
RETURNING
ApplicationInfo;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application"
    values={[
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application">

Removes the specified application from monitoring. Does not delete the application.

```sql
DELETE FROM aws.application_insights.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
