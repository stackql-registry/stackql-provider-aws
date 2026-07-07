--- 
title: service_principal_names
hide_title: false
hide_table_of_contents: false
keywords:
  - service_principal_names
  - pca_connector_ad
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

Creates, updates, deletes, gets or lists a <code>service_principal_names</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_principal_names" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pca_connector_ad.service_principal_names" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_principal_name"
    values={[
        { label: 'get_service_principal_name', value: 'get_service_principal_name' },
        { label: 'list_service_principal_names', value: 'list_service_principal_names' }
    ]}
>
<TabItem value="get_service_principal_name">

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
    <td><CopyableCode code="ConnectorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateConnector.html. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the service principal name was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryRegistrationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateDirectoryRegistration. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:directory-registration\/d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of a service principal name. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information for the status of a service principal name if the status is failed. (DIRECTORY_ACCESS_DENIED, DIRECTORY_NOT_REACHABLE, DIRECTORY_RESOURCE_NOT_FOUND, SPN_EXISTS_ON_DIFFERENT_AD_OBJECT, SPN_LIMIT_EXCEEDED, INTERNAL_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the service principal name was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_service_principal_names">

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
    <td><CopyableCode code="ConnectorArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateConnector. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the service principal name was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryRegistrationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateDirectoryRegistration. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:directory-registration\/d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of a service principal name. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information for the status of a service principal name if the status is failed. (DIRECTORY_ACCESS_DENIED, DIRECTORY_NOT_REACHABLE, DIRECTORY_RESOURCE_NOT_FOUND, SPN_EXISTS_ON_DIFFERENT_AD_OBJECT, SPN_LIMIT_EXCEEDED, INTERNAL_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time when the service principal name was updated.</td>
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
    <td><a href="#get_service_principal_name"><CopyableCode code="get_service_principal_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connector_arn"><code>connector_arn</code></a>, <a href="#parameter-directory_registration_arn"><code>directory_registration_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the service principal name that the connector uses to authenticate with Active Directory.</td>
</tr>
<tr>
    <td><a href="#list_service_principal_names"><CopyableCode code="list_service_principal_names" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-directory_registration_arn"><code>directory_registration_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the service principal names that the connector uses to authenticate with Active Directory.</td>
</tr>
<tr>
    <td><a href="#create_service_principal_name"><CopyableCode code="create_service_principal_name" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-connector_arn"><code>connector_arn</code></a>, <a href="#parameter-directory_registration_arn"><code>directory_registration_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a service principal name (SPN) for the service account in Active Directory. Kerberos authentication uses SPNs to associate a service instance with a service sign-in account.</td>
</tr>
<tr>
    <td><a href="#delete_service_principal_name"><CopyableCode code="delete_service_principal_name" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connector_arn"><code>connector_arn</code></a>, <a href="#parameter-directory_registration_arn"><code>directory_registration_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the service principal name (SPN) used by a connector to authenticate with your Active Directory.</td>
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
<tr id="parameter-connector_arn">
    <td><CopyableCode code="connector_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateConnector.</td>
</tr>
<tr id="parameter-directory_registration_arn">
    <td><CopyableCode code="directory_registration_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateDirectoryRegistration.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>Use this parameter when paginating results to specify the maximum number of items to return in the response on each page. If additional items exist beyond the number you specify, the NextToken element is sent in the response. Use this NextToken value in a subsequent request to retrieve additional items.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Use this parameter when paginating results in a subsequent request after you receive a response with truncated results. Set it to the value of the NextToken parameter from the response you just received.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_service_principal_name"
    values={[
        { label: 'get_service_principal_name', value: 'get_service_principal_name' },
        { label: 'list_service_principal_names', value: 'list_service_principal_names' }
    ]}
>
<TabItem value="get_service_principal_name">

Lists the service principal name that the connector uses to authenticate with Active Directory.

```sql
SELECT
ConnectorArn,
CreatedAt,
DirectoryRegistrationArn,
Status,
StatusReason,
UpdatedAt
FROM aws.pca_connector_ad.service_principal_names
WHERE connector_arn = '{{ connector_arn }}' -- required
AND directory_registration_arn = '{{ directory_registration_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_service_principal_names">

Lists the service principal names that the connector uses to authenticate with Active Directory.

```sql
SELECT
ConnectorArn,
CreatedAt,
DirectoryRegistrationArn,
Status,
StatusReason,
UpdatedAt
FROM aws.pca_connector_ad.service_principal_names
WHERE directory_registration_arn = '{{ directory_registration_arn }}' -- required
AND region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_service_principal_name"
    values={[
        { label: 'create_service_principal_name', value: 'create_service_principal_name' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_service_principal_name">

Creates a service principal name (SPN) for the service account in Active Directory. Kerberos authentication uses SPNs to associate a service instance with a service sign-in account.

```sql
INSERT INTO aws.pca_connector_ad.service_principal_names (
ClientToken,
connector_arn,
directory_registration_arn,
region
)
SELECT 
'{{ ClientToken }}',
'{{ connector_arn }}',
'{{ directory_registration_arn }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_principal_names
  props:
    - name: connector_arn
      value: "{{ connector_arn }}"
      description: Required parameter for the service_principal_names resource.
    - name: directory_registration_arn
      value: "{{ directory_registration_arn }}"
      description: Required parameter for the service_principal_names resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the service_principal_names resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_service_principal_name"
    values={[
        { label: 'delete_service_principal_name', value: 'delete_service_principal_name' }
    ]}
>
<TabItem value="delete_service_principal_name">

Deletes the service principal name (SPN) used by a connector to authenticate with your Active Directory.

```sql
DELETE FROM aws.pca_connector_ad.service_principal_names
WHERE connector_arn = '{{ connector_arn }}' --required
AND directory_registration_arn = '{{ directory_registration_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
