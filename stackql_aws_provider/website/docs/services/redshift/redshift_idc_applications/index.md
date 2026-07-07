--- 
title: redshift_idc_applications
hide_title: false
hide_table_of_contents: false
keywords:
  - redshift_idc_applications
  - redshift
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

Creates, updates, deletes, gets or lists a <code>redshift_idc_applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="redshift_idc_applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.redshift_idc_applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_redshift_idc_applications"
    values={[
        { label: 'describe_redshift_idc_applications', value: 'describe_redshift_idc_applications' }
    ]}
>
<TabItem value="describe_redshift_idc_applications">

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
    <td><CopyableCode code="ApplicationType" /></td>
    <td><code>string</code></td>
    <td>The type of application being created. Valid values are None or Lakehouse. Use Lakehouse to enable Amazon Redshift federated permissions on cluster.</td>
</tr>
<tr>
    <td><CopyableCode code="AuthorizedTokenIssuerList" /></td>
    <td><code>string</code></td>
    <td>The authorized token issuer list for the Amazon Redshift IAM Identity Center application.</td>
</tr>
<tr>
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the Amazon Redshift IAM Identity Center application. It has the required permissions to be assumed and invoke the IDC Identity Center API.</td>
</tr>
<tr>
    <td><CopyableCode code="IdcDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name for the Amazon Redshift IAM Identity Center application. It appears on the console.</td>
</tr>
<tr>
    <td><CopyableCode code="IdcInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the IAM Identity Center instance that Redshift integrates with.</td>
</tr>
<tr>
    <td><CopyableCode code="IdcManagedApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the Amazon Redshift IAM Identity Center application.</td>
</tr>
<tr>
    <td><CopyableCode code="IdcOnboardStatus" /></td>
    <td><code>string</code></td>
    <td>The onboarding status for the Amazon Redshift IAM Identity Center application.</td>
</tr>
<tr>
    <td><CopyableCode code="IdentityNamespace" /></td>
    <td><code>string</code></td>
    <td>The identity namespace for the Amazon Redshift IAM Identity Center application. It determines which managed application verifies the connection token.</td>
</tr>
<tr>
    <td><CopyableCode code="RedshiftIdcApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the Redshift application that integrates with IAM Identity Center.</td>
</tr>
<tr>
    <td><CopyableCode code="RedshiftIdcApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the Redshift application in IAM Identity Center.</td>
</tr>
<tr>
    <td><CopyableCode code="ServiceIntegrations" /></td>
    <td><code>string</code></td>
    <td>A list of service integrations for the Redshift IAM Identity Center application.</td>
</tr>
<tr>
    <td><CopyableCode code="SsoTagKeys" /></td>
    <td><code>string</code></td>
    <td>A list of tags keys that Redshift Identity Center applications copy to IAM Identity Center. For each input key, the tag corresponding to the key-value pair is propagated.</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>string</code></td>
    <td>A list of tags.</td>
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
    <td><a href="#describe_redshift_idc_applications"><CopyableCode code="describe_redshift_idc_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-RedshiftIdcApplicationArn"><code>RedshiftIdcApplicationArn</code></a>, <a href="#parameter-MaxRecords"><code>MaxRecords</code></a>, <a href="#parameter-Marker"><code>Marker</code></a></td>
    <td>Lists the Amazon Redshift IAM Identity Center applications.</td>
</tr>
<tr>
    <td><a href="#create_redshift_idc_application"><CopyableCode code="create_redshift_idc_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-IdcInstanceArn"><code>IdcInstanceArn</code></a>, <a href="#parameter-RedshiftIdcApplicationName"><code>RedshiftIdcApplicationName</code></a>, <a href="#parameter-IdcDisplayName"><code>IdcDisplayName</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-IdentityNamespace"><code>IdentityNamespace</code></a>, <a href="#parameter-AuthorizedTokenIssuerList"><code>AuthorizedTokenIssuerList</code></a>, <a href="#parameter-ServiceIntegrations"><code>ServiceIntegrations</code></a>, <a href="#parameter-ApplicationType"><code>ApplicationType</code></a>, <a href="#parameter-Tags"><code>Tags</code></a>, <a href="#parameter-SsoTagKeys"><code>SsoTagKeys</code></a></td>
    <td>Creates an Amazon Redshift application for use with IAM Identity Center.</td>
</tr>
<tr>
    <td><a href="#modify_redshift_idc_application"><CopyableCode code="modify_redshift_idc_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-RedshiftIdcApplicationArn"><code>RedshiftIdcApplicationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-IdentityNamespace"><code>IdentityNamespace</code></a>, <a href="#parameter-IamRoleArn"><code>IamRoleArn</code></a>, <a href="#parameter-IdcDisplayName"><code>IdcDisplayName</code></a>, <a href="#parameter-AuthorizedTokenIssuerList"><code>AuthorizedTokenIssuerList</code></a>, <a href="#parameter-ServiceIntegrations"><code>ServiceIntegrations</code></a></td>
    <td>Changes an existing Amazon Redshift IAM Identity Center application.</td>
</tr>
<tr>
    <td><a href="#delete_redshift_idc_application"><CopyableCode code="delete_redshift_idc_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-RedshiftIdcApplicationArn"><code>RedshiftIdcApplicationArn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Redshift IAM Identity Center application.</td>
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
<tr id="parameter-IamRoleArn">
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN for the Amazon Redshift IAM Identity Center application instance. It has the required permissions to be assumed and invoke the IDC Identity Center API.</td>
</tr>
<tr id="parameter-IdcDisplayName">
    <td><CopyableCode code="IdcDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name for the Amazon Redshift IAM Identity Center application instance. It appears in the console.</td>
</tr>
<tr id="parameter-IdcInstanceArn">
    <td><CopyableCode code="IdcInstanceArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon resource name (ARN) of the IAM Identity Center instance where Amazon Redshift creates a new managed application.</td>
</tr>
<tr id="parameter-RedshiftIdcApplicationArn">
    <td><CopyableCode code="RedshiftIdcApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for a deleted Amazon Redshift IAM Identity Center application.</td>
</tr>
<tr id="parameter-RedshiftIdcApplicationName">
    <td><CopyableCode code="RedshiftIdcApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the Redshift application in IAM Identity Center.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-ApplicationType">
    <td><CopyableCode code="ApplicationType" /></td>
    <td><code>string</code></td>
    <td>The type of application being created. Valid values are None or Lakehouse. Use Lakehouse to enable Amazon Redshift federated permissions on cluster.</td>
</tr>
<tr id="parameter-AuthorizedTokenIssuerList">
    <td><CopyableCode code="AuthorizedTokenIssuerList" /></td>
    <td><code>array</code></td>
    <td>The authorized token issuer list for the Amazon Redshift IAM Identity Center application to change.</td>
</tr>
<tr id="parameter-IamRoleArn">
    <td><CopyableCode code="IamRoleArn" /></td>
    <td><code>string</code></td>
    <td>The IAM role ARN associated with the Amazon Redshift IAM Identity Center application to change. It has the required permissions to be assumed and invoke the IDC Identity Center API.</td>
</tr>
<tr id="parameter-IdcDisplayName">
    <td><CopyableCode code="IdcDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name for the Amazon Redshift IAM Identity Center application to change. It appears on the console.</td>
</tr>
<tr id="parameter-IdentityNamespace">
    <td><CopyableCode code="IdentityNamespace" /></td>
    <td><code>string</code></td>
    <td>The namespace for the Amazon Redshift IAM Identity Center application to change. It determines which managed application verifies the connection token.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>A value that indicates the starting point for the next set of response records in a subsequent request. If a value is returned in a response, you can retrieve the next set of records by providing this returned marker value in the Marker parameter and retrying the command. If the Marker field is empty, all response records have been retrieved for the request.</td>
</tr>
<tr id="parameter-MaxRecords">
    <td><CopyableCode code="MaxRecords" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.</td>
</tr>
<tr id="parameter-RedshiftIdcApplicationArn">
    <td><CopyableCode code="RedshiftIdcApplicationArn" /></td>
    <td><code>string</code></td>
    <td>The ARN for the Redshift application that integrates with IAM Identity Center.</td>
</tr>
<tr id="parameter-ServiceIntegrations">
    <td><CopyableCode code="ServiceIntegrations" /></td>
    <td><code>array</code></td>
    <td>A collection of service integrations associated with the application.</td>
</tr>
<tr id="parameter-SsoTagKeys">
    <td><CopyableCode code="SsoTagKeys" /></td>
    <td><code>array</code></td>
    <td>A list of tags keys that Redshift Identity Center applications copy to IAM Identity Center. For each input key, the tag corresponding to the key-value pair is propagated.</td>
</tr>
<tr id="parameter-Tags">
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_redshift_idc_applications"
    values={[
        { label: 'describe_redshift_idc_applications', value: 'describe_redshift_idc_applications' }
    ]}
>
<TabItem value="describe_redshift_idc_applications">

Lists the Amazon Redshift IAM Identity Center applications.

```sql
SELECT
ApplicationType,
AuthorizedTokenIssuerList,
IamRoleArn,
IdcDisplayName,
IdcInstanceArn,
IdcManagedApplicationArn,
IdcOnboardStatus,
IdentityNamespace,
RedshiftIdcApplicationArn,
RedshiftIdcApplicationName,
ServiceIntegrations,
SsoTagKeys,
Tags
FROM aws.redshift.redshift_idc_applications
WHERE region = '{{ region }}' -- required
AND RedshiftIdcApplicationArn = '{{ RedshiftIdcApplicationArn }}'
AND MaxRecords = '{{ MaxRecords }}'
AND Marker = '{{ Marker }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_redshift_idc_application"
    values={[
        { label: 'create_redshift_idc_application', value: 'create_redshift_idc_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_redshift_idc_application">

Creates an Amazon Redshift application for use with IAM Identity Center.

```sql
INSERT INTO aws.redshift.redshift_idc_applications (
IdcInstanceArn,
RedshiftIdcApplicationName,
IdcDisplayName,
IamRoleArn,
region,
IdentityNamespace,
AuthorizedTokenIssuerList,
ServiceIntegrations,
ApplicationType,
Tags,
SsoTagKeys
)
SELECT 
'{{ IdcInstanceArn }}',
'{{ RedshiftIdcApplicationName }}',
'{{ IdcDisplayName }}',
'{{ IamRoleArn }}',
'{{ region }}',
'{{ IdentityNamespace }}',
'{{ AuthorizedTokenIssuerList }}',
'{{ ServiceIntegrations }}',
'{{ ApplicationType }}',
'{{ Tags }}',
'{{ SsoTagKeys }}'
RETURNING
ApplicationType,
AuthorizedTokenIssuerList,
IamRoleArn,
IdcDisplayName,
IdcInstanceArn,
IdcManagedApplicationArn,
IdcOnboardStatus,
IdentityNamespace,
RedshiftIdcApplicationArn,
RedshiftIdcApplicationName,
ServiceIntegrations,
SsoTagKeys,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: redshift_idc_applications
  props:
    - name: IdcInstanceArn
      value: "{{ IdcInstanceArn }}"
      description: Required parameter for the redshift_idc_applications resource.
    - name: RedshiftIdcApplicationName
      value: "{{ RedshiftIdcApplicationName }}"
      description: Required parameter for the redshift_idc_applications resource.
    - name: IdcDisplayName
      value: "{{ IdcDisplayName }}"
      description: Required parameter for the redshift_idc_applications resource.
    - name: IamRoleArn
      value: "{{ IamRoleArn }}"
      description: Required parameter for the redshift_idc_applications resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the redshift_idc_applications resource.
    - name: IdentityNamespace
      value: "{{ IdentityNamespace }}"
      description: The namespace for the Amazon Redshift IAM Identity Center application instance. It determines which managed application verifies the connection token.
      description: The namespace for the Amazon Redshift IAM Identity Center application instance. It determines which managed application verifies the connection token.
    - name: AuthorizedTokenIssuerList
      value: "{{ AuthorizedTokenIssuerList }}"
      description: The token issuer list for the Amazon Redshift IAM Identity Center application instance.
      description: The token issuer list for the Amazon Redshift IAM Identity Center application instance.
    - name: ServiceIntegrations
      value: "{{ ServiceIntegrations }}"
      description: A collection of service integrations for the Redshift IAM Identity Center application.
      description: A collection of service integrations for the Redshift IAM Identity Center application.
    - name: ApplicationType
      value: "{{ ApplicationType }}"
      description: The type of application being created. Valid values are None or Lakehouse. Use Lakehouse to enable Amazon Redshift federated permissions on cluster.
      description: The type of application being created. Valid values are None or Lakehouse. Use Lakehouse to enable Amazon Redshift federated permissions on cluster.
    - name: Tags
      value: "{{ Tags }}"
      description: A list of tags.
      description: A list of tags.
    - name: SsoTagKeys
      value: "{{ SsoTagKeys }}"
      description: A list of tags keys that Redshift Identity Center applications copy to IAM Identity Center. For each input key, the tag corresponding to the key-value pair is propagated.
      description: A list of tags keys that Redshift Identity Center applications copy to IAM Identity Center. For each input key, the tag corresponding to the key-value pair is propagated.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="modify_redshift_idc_application"
    values={[
        { label: 'modify_redshift_idc_application', value: 'modify_redshift_idc_application' }
    ]}
>
<TabItem value="modify_redshift_idc_application">

Changes an existing Amazon Redshift IAM Identity Center application.

```sql
UPDATE aws.redshift.redshift_idc_applications
SET 
-- No updatable properties
WHERE 
RedshiftIdcApplicationArn = '{{ RedshiftIdcApplicationArn }}' --required
AND region = '{{ region }}' --required
AND IdentityNamespace = '{{ IdentityNamespace}}'
AND IamRoleArn = '{{ IamRoleArn}}'
AND IdcDisplayName = '{{ IdcDisplayName}}'
AND AuthorizedTokenIssuerList = '{{ AuthorizedTokenIssuerList}}'
AND ServiceIntegrations = '{{ ServiceIntegrations}}'
RETURNING
ApplicationType,
AuthorizedTokenIssuerList,
IamRoleArn,
IdcDisplayName,
IdcInstanceArn,
IdcManagedApplicationArn,
IdcOnboardStatus,
IdentityNamespace,
RedshiftIdcApplicationArn,
RedshiftIdcApplicationName,
ServiceIntegrations,
SsoTagKeys,
Tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_redshift_idc_application"
    values={[
        { label: 'delete_redshift_idc_application', value: 'delete_redshift_idc_application' }
    ]}
>
<TabItem value="delete_redshift_idc_application">

Deletes an Amazon Redshift IAM Identity Center application.

```sql
DELETE FROM aws.redshift.redshift_idc_applications
WHERE RedshiftIdcApplicationArn = '{{ RedshiftIdcApplicationArn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
