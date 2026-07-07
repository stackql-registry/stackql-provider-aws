--- 
title: workteams
hide_title: false
hide_table_of_contents: false
keywords:
  - workteams
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>workteams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workteams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.workteams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_workteam"
    values={[
        { label: 'describe_workteam', value: 'describe_workteam' },
        { label: 'list_workteams', value: 'list_workteams' }
    ]}
>
<TabItem value="describe_workteam">

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
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the work team was created (timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the work team. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the work team was last updated (timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="MemberDefinitions" /></td>
    <td><code>array</code></td>
    <td>A list of MemberDefinition objects that contains objects that identify the workers that make up the work team. Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use CognitoMemberDefinition. For workforces created using your own OIDC identity provider (IdP) use OidcMemberDefinition.</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configures SNS notifications of available or expiring work items for work teams.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductListingIds" /></td>
    <td><code>array</code></td>
    <td>The Amazon Marketplace identifier for a vendor's work team.</td>
</tr>
<tr>
    <td><CopyableCode code="SubDomain" /></td>
    <td><code>string</code></td>
    <td>The URI of the labeling job's user interface. Workers open this URI to start labeling your data objects.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkerAccessConfiguration" /></td>
    <td><code>object</code></td>
    <td>Describes any access constraints that have been defined for Amazon S3 resources.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkforceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workforce. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:workforce/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkteamArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the work team. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:workteam/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkteamName" /></td>
    <td><code>string</code></td>
    <td>The name of the work team. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workteams">

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
    <td><CopyableCode code="CreateDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the work team was created (timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>A description of the work team. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the work team was last updated (timestamp).</td>
</tr>
<tr>
    <td><CopyableCode code="MemberDefinitions" /></td>
    <td><code>array</code></td>
    <td>A list of MemberDefinition objects that contains objects that identify the workers that make up the work team. Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use CognitoMemberDefinition. For workforces created using your own OIDC identity provider (IdP) use OidcMemberDefinition.</td>
</tr>
<tr>
    <td><CopyableCode code="NotificationConfiguration" /></td>
    <td><code>object</code></td>
    <td>Configures SNS notifications of available or expiring work items for work teams.</td>
</tr>
<tr>
    <td><CopyableCode code="ProductListingIds" /></td>
    <td><code>array</code></td>
    <td>The Amazon Marketplace identifier for a vendor's work team.</td>
</tr>
<tr>
    <td><CopyableCode code="SubDomain" /></td>
    <td><code>string</code></td>
    <td>The URI of the labeling job's user interface. Workers open this URI to start labeling your data objects.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkerAccessConfiguration" /></td>
    <td><code>object</code></td>
    <td>Describes any access constraints that have been defined for Amazon S3 resources.</td>
</tr>
<tr>
    <td><CopyableCode code="WorkforceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the workforce. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:workforce/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkteamArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that identifies the work team. (pattern: &lt;code&gt;arn:aws&#91;a-z\-&#93;*:sagemaker:&#91;a-z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:workteam/.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="WorkteamName" /></td>
    <td><code>string</code></td>
    <td>The name of the work team. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)&#123;0,62&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_workteam"><CopyableCode code="describe_workteam" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific work team. You can see information such as the creation date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#list_workteams"><CopyableCode code="list_workteams" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets a list of private work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the NameContains parameter.</td>
</tr>
<tr>
    <td><a href="#create_workteam"><CopyableCode code="create_workteam" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkteamName"><code>WorkteamName</code></a>, <a href="#parameter-MemberDefinitions"><code>MemberDefinitions</code></a></td>
    <td></td>
    <td>Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team. You cannot create more than 25 work teams in an account and region.</td>
</tr>
<tr>
    <td><a href="#update_workteam"><CopyableCode code="update_workteam" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WorkteamName"><code>WorkteamName</code></a></td>
    <td></td>
    <td>Updates an existing work team with new member definitions or description.</td>
</tr>
<tr>
    <td><a href="#delete_workteam"><CopyableCode code="delete_workteam" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing work team. This operation can't be undone.</td>
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
    defaultValue="describe_workteam"
    values={[
        { label: 'describe_workteam', value: 'describe_workteam' },
        { label: 'list_workteams', value: 'list_workteams' }
    ]}
>
<TabItem value="describe_workteam">

Gets information about a specific work team. You can see information such as the creation date, the last updated date, membership information, and the work team's Amazon Resource Name (ARN).

```sql
SELECT
CreateDate,
Description,
LastUpdatedDate,
MemberDefinitions,
NotificationConfiguration,
ProductListingIds,
SubDomain,
WorkerAccessConfiguration,
WorkforceArn,
WorkteamArn,
WorkteamName
FROM aws.sagemaker.workteams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workteams">

Gets a list of private work teams that you have defined in a region. The list may be empty if no work team satisfies the filter specified in the NameContains parameter.

```sql
SELECT
CreateDate,
Description,
LastUpdatedDate,
MemberDefinitions,
NotificationConfiguration,
ProductListingIds,
SubDomain,
WorkerAccessConfiguration,
WorkforceArn,
WorkteamArn,
WorkteamName
FROM aws.sagemaker.workteams
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_workteam"
    values={[
        { label: 'create_workteam', value: 'create_workteam' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_workteam">

Creates a new work team for labeling your data. A work team is defined by one or more Amazon Cognito user pools. You must first create the user pools before you can create a work team. You cannot create more than 25 work teams in an account and region.

```sql
INSERT INTO aws.sagemaker.workteams (
WorkteamName,
WorkforceName,
MemberDefinitions,
Description,
NotificationConfiguration,
WorkerAccessConfiguration,
Tags,
region
)
SELECT 
'{{ WorkteamName }}' /* required */,
'{{ WorkforceName }}',
'{{ MemberDefinitions }}' /* required */,
'{{ Description }}',
'{{ NotificationConfiguration }}',
'{{ WorkerAccessConfiguration }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
WorkteamArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: workteams
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the workteams resource.
    - name: WorkteamName
      value: "{{ WorkteamName }}"
      description: |
        The name of the work team. Use this name to identify the work team.
    - name: WorkforceName
      value: "{{ WorkforceName }}"
      description: |
        The name of the workforce.
    - name: MemberDefinitions
      description: |
        A list of MemberDefinition objects that contains objects that identify the workers that make up the work team. Workforces can be created using Amazon Cognito or your own OIDC Identity Provider (IdP). For private workforces created using Amazon Cognito use CognitoMemberDefinition. For workforces created using your own OIDC identity provider (IdP) use OidcMemberDefinition. Do not provide input for both of these parameters in a single request. For workforces created using Amazon Cognito, private work teams correspond to Amazon Cognito user groups within the user pool used to create a workforce. All of the CognitoMemberDefinition objects that make up the member definition must have the same ClientId and UserPool values. To add a Amazon Cognito user group to an existing worker pool, see Adding groups to a User Pool. For more information about user pools, see Amazon Cognito User Pools. For workforces created using your own OIDC IdP, specify the user groups that you want to include in your private work team in OidcMemberDefinition by listing those groups in Groups.
      value:
        - CognitoMemberDefinition:
            UserPool: "{{ UserPool }}"
            UserGroup: "{{ UserGroup }}"
            ClientId: "{{ ClientId }}"
          OidcMemberDefinition:
            Groups:
              - "{{ Groups }}"
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the work team.
    - name: NotificationConfiguration
      description: |
        Configures notification of workers regarding available or expiring work items.
      value:
        NotificationTopicArn: "{{ NotificationTopicArn }}"
    - name: WorkerAccessConfiguration
      description: |
        Use this optional parameter to constrain access to an Amazon S3 resource based on the IP address using supported IAM global condition keys. The Amazon S3 resource is accessed in the worker portal using a Amazon S3 presigned URL.
      value:
        S3Presign:
          IamPolicyConstraints:
            SourceIp: "{{ SourceIp }}"
            VpcSourceIp: "{{ VpcSourceIp }}"
    - name: Tags
      description: |
        An array of key-value pairs. For more information, see Resource Tag and Using Cost Allocation Tags in the Amazon Web Services Billing and Cost Management User Guide.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_workteam"
    values={[
        { label: 'update_workteam', value: 'update_workteam' }
    ]}
>
<TabItem value="update_workteam">

Updates an existing work team with new member definitions or description.

```sql
UPDATE aws.sagemaker.workteams
SET 
WorkteamName = '{{ WorkteamName }}',
MemberDefinitions = '{{ MemberDefinitions }}',
Description = '{{ Description }}',
NotificationConfiguration = '{{ NotificationConfiguration }}',
WorkerAccessConfiguration = '{{ WorkerAccessConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND WorkteamName = '{{ WorkteamName }}' --required
RETURNING
Workteam;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_workteam"
    values={[
        { label: 'delete_workteam', value: 'delete_workteam' }
    ]}
>
<TabItem value="delete_workteam">

Deletes an existing work team. This operation can't be undone.

```sql
DELETE FROM aws.sagemaker.workteams
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
