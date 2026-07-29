--- 
title: connectors
hide_title: false
hide_table_of_contents: false
keywords:
  - connectors
  - pca_connector_scep
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pca_connector_scep.connectors" /></td></tr>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:pca-connector-scep:&#91;a-z&#93;+(-&#91;a-z&#93;+)+-&#91;1-9&#93;\d*:\d&#123;12&#125;:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_authority_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the certificate authority associated with the connector. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:acm-pca:&#91;a-z&#93;+(-&#91;a-z&#93;+)+-&#91;1-9&#93;\d*:\d&#123;12&#125;:certificate-authority\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connector was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The connector's HTTPS public SCEP URL.</td>
</tr>
<tr>
    <td><CopyableCode code="mobile_device_management" /></td>
    <td><code>object</code></td>
    <td>If you don't supply a value, by default Connector for SCEP creates a connector for general-purpose use. A general-purpose connector is designed to work with clients or endpoints that support the SCEP protocol, except Connector for SCEP for Microsoft Intune. For information about considerations and limitations with using Connector for SCEP, see Considerations and Limitations. If you provide an IntuneConfiguration, Connector for SCEP creates a connector for use with Microsoft Intune, and you manage the challenge passwords using Microsoft Intune. For more information, see Using Connector for SCEP for Microsoft Intune.</td>
</tr>
<tr>
    <td><CopyableCode code="open_id_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains OpenID Connect (OIDC) parameters for use with Connector for SCEP for Microsoft Intune. For more information about using Connector for SCEP for Microsoft Intune, see Using Connector for SCEP for Microsoft Intune.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The connector's status. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Information about why connector creation failed, if status is FAILED. (INTERNAL_FAILURE, PRIVATECA_ACCESS_DENIED, PRIVATECA_INVALID_STATE, PRIVATECA_RESOURCE_NOT_FOUND, VPC_ENDPOINT_RESOURCE_NOT_FOUND, VPC_ENDPOINT_DNS_ENTRIES_NOT_FOUND)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The connector type. (GENERAL_PURPOSE, INTUNE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the connector was updated.</td>
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:pca-connector-scep:&#91;a-z&#93;+(-&#91;a-z&#93;+)+-&#91;1-9&#93;\d*:\d&#123;12&#125;:connector\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_authority_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connector's associated certificate authority. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)*:acm-pca:&#91;a-z&#93;+(-&#91;a-z&#93;+)+-&#91;1-9&#93;\d*:\d&#123;12&#125;:certificate-authority\/&#91;0-9a-f&#93;&#123;8&#125;(-&#91;0-9a-f&#93;&#123;4&#125;)&#123;3&#125;-&#91;0-9a-f&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the challenge was created.</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The connector's HTTPS public SCEP URL.</td>
</tr>
<tr>
    <td><CopyableCode code="mobile_device_management" /></td>
    <td><code>object</code></td>
    <td>If you don't supply a value, by default Connector for SCEP creates a connector for general-purpose use. A general-purpose connector is designed to work with clients or endpoints that support the SCEP protocol, except Connector for SCEP for Microsoft Intune. For information about considerations and limitations with using Connector for SCEP, see Considerations and Limitations. If you provide an IntuneConfiguration, Connector for SCEP creates a connector for use with Microsoft Intune, and you manage the challenge passwords using Microsoft Intune. For more information, see Using Connector for SCEP for Microsoft Intune.</td>
</tr>
<tr>
    <td><CopyableCode code="open_id_configuration" /></td>
    <td><code>object</code></td>
    <td>Contains OpenID Connect (OIDC) parameters for use with Microsoft Intune.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The connector's status. Status can be creating, active, deleting, or failed. (CREATING, ACTIVE, DELETING, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>string</code></td>
    <td>Information about why connector creation failed, if status is FAILED. (INTERNAL_FAILURE, PRIVATECA_ACCESS_DENIED, PRIVATECA_INVALID_STATE, PRIVATECA_RESOURCE_NOT_FOUND, VPC_ENDPOINT_RESOURCE_NOT_FOUND, VPC_ENDPOINT_DNS_ENTRIES_NOT_FOUND)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The connector type. (GENERAL_PURPOSE, INTUNE)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the challenge was updated.</td>
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
    <td>Retrieves details about the specified Connector. Calling this action returns important details about the connector, such as the public SCEP URL where your clients can request certificates.</td>
</tr>
<tr>
    <td><a href="#list_connectors"><CopyableCode code="list_connectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-MaxResults"><code>MaxResults</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a></td>
    <td>Lists the connectors belonging to your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_connector"><CopyableCode code="create_connector" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateAuthorityArn"><code>CertificateAuthorityArn</code></a></td>
    <td></td>
    <td>Creates a SCEP connector. A SCEP connector links Amazon Web Services Private Certificate Authority to your SCEP-compatible devices and mobile device management (MDM) systems. Before you create a connector, you must complete a set of prerequisites, including creation of a private certificate authority (CA) to use with this connector. For more information, see Connector for SCEP prerequisites.</td>
</tr>
<tr>
    <td><a href="#delete_connector"><CopyableCode code="delete_connector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connector_arn"><code>connector_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified Connector. This operation also deletes any challenges associated with the connector.</td>
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
    <td>The Amazon Resource Name (ARN) of the connector to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of objects that you want Connector for SCEP to return for this request. If more objects are available, in the response, Connector for SCEP provides a NextToken value that you can use in a subsequent call to get the next batch of objects.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>When you request a list of objects with a MaxResults setting, if the number of objects that are still available for retrieval exceeds the maximum you requested, Connector for SCEP returns a NextToken value in the response. To retrieve the next batch of objects, use the token returned from the prior request in your next request.</td>
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

Retrieves details about the specified Connector. Calling this action returns important details about the connector, such as the public SCEP URL where your clients can request certificates.

```sql
SELECT
arn,
certificate_authority_arn,
created_at,
endpoint,
mobile_device_management,
open_id_configuration,
status,
status_reason,
type,
updated_at
FROM aws.pca_connector_scep.connectors
WHERE connector_arn = '{{ connector_arn }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_connectors">

Lists the connectors belonging to your Amazon Web Services account.

```sql
SELECT
arn,
certificate_authority_arn,
created_at,
endpoint,
mobile_device_management,
open_id_configuration,
status,
status_reason,
type,
updated_at
FROM aws.pca_connector_scep.connectors
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

Creates a SCEP connector. A SCEP connector links Amazon Web Services Private Certificate Authority to your SCEP-compatible devices and mobile device management (MDM) systems. Before you create a connector, you must complete a set of prerequisites, including creation of a private certificate authority (CA) to use with this connector. For more information, see Connector for SCEP prerequisites.

```sql
INSERT INTO aws.pca_connector_scep.connectors (
CertificateAuthorityArn,
MobileDeviceManagement,
VpcEndpointId,
ClientToken,
Tags,
region
)
SELECT 
'{{ CertificateAuthorityArn }}' /* required */,
'{{ MobileDeviceManagement }}',
'{{ VpcEndpointId }}',
'{{ ClientToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
connector_arn
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
    - name: MobileDeviceManagement
      description: |
        If you don't supply a value, by default Connector for SCEP creates a connector for general-purpose use. A general-purpose connector is designed to work with clients or endpoints that support the SCEP protocol, except Connector for SCEP for Microsoft Intune. For information about considerations and limitations with using Connector for SCEP, see Considerations and Limitations. If you provide an IntuneConfiguration, Connector for SCEP creates a connector for use with Microsoft Intune, and you manage the challenge passwords using Microsoft Intune. For more information, see Using Connector for SCEP for Microsoft Intune.
      value:
        Intune:
          AzureApplicationId: "{{ AzureApplicationId }}"
          Domain: "{{ Domain }}"
    - name: VpcEndpointId
      value: "{{ VpcEndpointId }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
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

Deletes the specified Connector. This operation also deletes any challenges associated with the connector.

```sql
DELETE FROM aws.pca_connector_scep.connectors
WHERE connector_arn = '{{ connector_arn }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
