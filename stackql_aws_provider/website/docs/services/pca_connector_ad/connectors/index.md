--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
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

Creates, updates, deletes, gets or lists a <code>connectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pca_connector_ad.connectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connector"
    values={[
        { label: 'get_connector', value: 'get_connector' },
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="get_connector">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateConnector. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateAuthorityArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the certificate authority being used. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:acm-pca:&#91;\w-&#93;+:&#91;0-9&#93;+:certificate-authority\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateEnrollmentPolicyServerEndpoint" /></td>
    <td><code>string</code></td>
    <td>Certificate enrollment endpoint for Active Directory domain-joined objects reach out to when requesting certificates.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Active Directory. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of the connector. Status can be creating, active, deleting, or failed. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the connector status if the status is failed. (CA_CERTIFICATE_REGISTRATION_FAILED, DIRECTORY_ACCESS_DENIED, INTERNAL_FAILURE, INSUFFICIENT_FREE_ADDRESSES, INVALID_SUBNET_IP_PROTOCOL, PRIVATECA_ACCESS_DENIED, PRIVATECA_RESOURCE_NOT_FOUND, SECURITY_GROUP_NOT_IN_VPC, VPC_ACCESS_DENIED, VPC_ENDPOINT_LIMIT_EXCEEDED, VPC_RESOURCE_NOT_FOUND)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connector was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcInformation" /></td>
    <td><code>object</code></td>
    <td>Information about your VPC and security groups used with the connector.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_connectors">

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
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that was returned when you called CreateConnector. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:pca-connector-ad:&#91;\w-&#93;+:&#91;0-9&#93;+:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateAuthorityArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the certificate authority being used. (pattern: &lt;code&gt;^arn:&#91;\w-&#93;+:acm-pca:&#91;\w-&#93;+:&#91;0-9&#93;+:certificate-authority\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateEnrollmentPolicyServerEndpoint" /></td>
    <td><code>string</code></td>
    <td>Certificate enrollment endpoint for Active Directory domain-joined objects to request certificates.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DirectoryId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Active Directory. (pattern: &lt;code&gt;^d-&#91;0-9a-f&#93;&#123;10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>Status of the connector. Status can be creating, active, deleting, or failed. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StatusReason" /></td>
    <td><code>string</code></td>
    <td>Additional information about the connector status if the status is failed. (CA_CERTIFICATE_REGISTRATION_FAILED, DIRECTORY_ACCESS_DENIED, INTERNAL_FAILURE, INSUFFICIENT_FREE_ADDRESSES, INVALID_SUBNET_IP_PROTOCOL, PRIVATECA_ACCESS_DENIED, PRIVATECA_RESOURCE_NOT_FOUND, SECURITY_GROUP_NOT_IN_VPC, VPC_ACCESS_DENIED, VPC_ENDPOINT_LIMIT_EXCEEDED, VPC_RESOURCE_NOT_FOUND)</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connector was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="VpcInformation" /></td>
    <td><code>object</code></td>
    <td>Information about your VPC and security groups used with the connector.</td>
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
    <td><a href="#get_connector"><CopyableCode code="get_connector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connector_arn"><code>connector_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about your connector. You specify the connector on input by its ARN (Amazon Resource Name).</td>
</tr>
<tr>
    <td><a href="#list_connectors"><CopyableCode code="list_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the connectors that you created by using the https:​//docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector action.</td>
</tr>
<tr>
    <td><a href="#create_connector"><CopyableCode code="create_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateAuthorityArn"><code>CertificateAuthorityArn</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-VpcInformation"><code>VpcInformation</code></a></td>
    <td></td>
    <td>Creates a connector between Amazon Web Services Private CA and an Active Directory. You must specify the private CA, directory ID, and security groups.</td>
</tr>
<tr>
    <td><a href="#delete_connector"><CopyableCode code="delete_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connector_arn"><code>connector_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a connector for Active Directory. You must provide the Amazon Resource Name (ARN) of the connector that you want to delete. You can find the ARN by calling the https:​//docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_ListConnectors action. Deleting a connector does not deregister your directory with Amazon Web Services Private CA. You can deregister your directory by calling the https:​//docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_DeleteDirectoryRegistration action.</td>
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
    defaultValue="get_connector"
    values={[
        { label: 'get_connector', value: 'get_connector' },
        { label: 'list_connectors', value: 'list_connectors' }
    ]}
>
<TabItem value="get_connector">

Lists information about your connector. You specify the connector on input by its ARN (Amazon Resource Name).

```sql
SELECT
Arn,
CertificateAuthorityArn,
CertificateEnrollmentPolicyServerEndpoint,
CreatedAt,
DirectoryId,
Status,
StatusReason,
UpdatedAt,
VpcInformation
FROM aws.pca_connector_ad.connectors
WHERE connector_arn = '{{ connector_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connectors">

Lists the connectors that you created by using the https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector action.

```sql
SELECT
Arn,
CertificateAuthorityArn,
CertificateEnrollmentPolicyServerEndpoint,
CreatedAt,
DirectoryId,
Status,
StatusReason,
UpdatedAt,
VpcInformation
FROM aws.pca_connector_ad.connectors
WHERE region = '{{ region }}' -- required
AND MaxResults = '{{ MaxResults }}'
AND NextToken = '{{ NextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connector"
    values={[
        { label: 'create_connector', value: 'create_connector' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connector">

Creates a connector between Amazon Web Services Private CA and an Active Directory. You must specify the private CA, directory ID, and security groups.

```sql
INSERT INTO aws.pca_connector_ad.connectors (
CertificateAuthorityArn,
ClientToken,
DirectoryId,
Tags,
VpcInformation,
region
)
SELECT 
'{{ CertificateAuthorityArn }}' /* required */,
'{{ ClientToken }}',
'{{ DirectoryId }}' /* required */,
'{{ Tags }}',
'{{ VpcInformation }}' /* required */,
'{{ region }}'
RETURNING
ConnectorArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connectors
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connectors resource.
    - name: CertificateAuthorityArn
      value: "{{ CertificateAuthorityArn }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: DirectoryId
      value: "{{ DirectoryId }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: VpcInformation
      description: |
        Information about your VPC and security groups used with the connector.
      value:
        IpAddressType: "{{ IpAddressType }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connector"
    values={[
        { label: 'delete_connector', value: 'delete_connector' }
    ]}
>
<TabItem value="delete_connector">

Deletes a connector for Active Directory. You must provide the Amazon Resource Name (ARN) of the connector that you want to delete. You can find the ARN by calling the https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_ListConnectors action. Deleting a connector does not deregister your directory with Amazon Web Services Private CA. You can deregister your directory by calling the https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_DeleteDirectoryRegistration action.

```sql
DELETE FROM aws.pca_connector_ad.connectors
WHERE connector_arn = '{{ connector_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
