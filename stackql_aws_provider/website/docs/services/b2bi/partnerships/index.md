--- 
title: partnerships
hide_title: false
hide_table_of_contents: false
keywords:
  - partnerships
  - b2bi
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

Creates, updates, deletes, gets or lists a <code>partnerships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partnerships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.b2bi.partnerships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_partnership"
    values={[
        { label: 'get_partnership', value: 'get_partnership' },
        { label: 'list_partnerships', value: 'list_partnerships' }
    ]}
>
<TabItem value="get_partnership">

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
    <td>Returns the display name of the partnership</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Returns one or more capabilities associated with this partnership.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilityOptions" /></td>
    <td><code>object</code></td>
    <td>Contains the details for an Outbound EDI capability.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp for creation date and time of the partnership.</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Returns the email address associated with this trading partner. (pattern: &lt;code&gt;&#91;\w\.\-&#93;+@&#91;\w\.\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="partnershipArn" /></td>
    <td><code>string</code></td>
    <td>Returns an Amazon Resource Name (ARN) for a specific Amazon Web Services resource, such as a capability, partnership, profile, or transformer.</td>
</tr>
<tr>
    <td><CopyableCode code="partnershipId" /></td>
    <td><code>string</code></td>
    <td>Returns the unique, system-generated identifier for a partnership. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string</code></td>
    <td>Returns the phone number associated with the partnership. (pattern: &lt;code&gt;\+?(&#91;0-9 \t\-()\/&#93;&#123;7,&#125;)(?:\s*(?:#|x\.?|ext\.?|extension) \t*(\d+))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profileId" /></td>
    <td><code>string</code></td>
    <td>Returns the unique, system-generated identifier for the profile connected to this partnership. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tradingPartnerId" /></td>
    <td><code>string</code></td>
    <td>Returns the unique identifier for the partner for this partnership. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_partnerships">

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
    <td>Returns the name of the partnership.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Returns one or more capabilities associated with this partnership.</td>
</tr>
<tr>
    <td><CopyableCode code="capabilityOptions" /></td>
    <td><code>object</code></td>
    <td>Contains the details for an Outbound EDI capability.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp for creation date and time of the partnership.</td>
</tr>
<tr>
    <td><CopyableCode code="modifiedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>Returns a timestamp that identifies the most recent date and time that the partnership was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="partnershipId" /></td>
    <td><code>string</code></td>
    <td>Returns the unique, system-generated identifier for a partnership. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="profileId" /></td>
    <td><code>string</code></td>
    <td>Returns the unique, system-generated identifier for the profile connected to this partnership. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="tradingPartnerId" /></td>
    <td><code>string</code></td>
    <td>Returns the unique, system-generated identifier for a trading partner. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_partnership"><CopyableCode code="get_partnership" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details for a partnership, based on the partner and profile IDs specified. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.</td>
</tr>
<tr>
    <td><a href="#list_partnerships"><CopyableCode code="list_partnerships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the partnerships associated with your Amazon Web Services account for your current or specified region. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.</td>
</tr>
<tr>
    <td><a href="#create_partnership"><CopyableCode code="create_partnership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-profileId"><code>profileId</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-email"><code>email</code></a>, <a href="#parameter-capabilities"><code>capabilities</code></a></td>
    <td></td>
    <td>Creates a partnership between a customer and a trading partner, based on the supplied parameters. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.</td>
</tr>
<tr>
    <td><a href="#update_partnership"><CopyableCode code="update_partnership" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-partnershipId"><code>partnershipId</code></a></td>
    <td></td>
    <td>Updates some of the parameters for a partnership between a customer and trading partner. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.</td>
</tr>
<tr>
    <td><a href="#delete_partnership"><CopyableCode code="delete_partnership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified partnership. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.</td>
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
    defaultValue="get_partnership"
    values={[
        { label: 'get_partnership', value: 'get_partnership' },
        { label: 'list_partnerships', value: 'list_partnerships' }
    ]}
>
<TabItem value="get_partnership">

Retrieves the details for a partnership, based on the partner and profile IDs specified. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.

```sql
SELECT
name,
capabilities,
capabilityOptions,
createdAt,
email,
modifiedAt,
partnershipArn,
partnershipId,
phone,
profileId,
tradingPartnerId
FROM aws.b2bi.partnerships
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_partnerships">

Lists the partnerships associated with your Amazon Web Services account for your current or specified region. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.

```sql
SELECT
name,
capabilities,
capabilityOptions,
createdAt,
modifiedAt,
partnershipId,
profileId,
tradingPartnerId
FROM aws.b2bi.partnerships
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_partnership"
    values={[
        { label: 'create_partnership', value: 'create_partnership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_partnership">

Creates a partnership between a customer and a trading partner, based on the supplied parameters. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.

```sql
INSERT INTO aws.b2bi.partnerships (
profileId,
name,
email,
phone,
capabilities,
capabilityOptions,
clientToken,
tags,
region
)
SELECT 
'{{ profileId }}' /* required */,
'{{ name }}' /* required */,
'{{ email }}' /* required */,
'{{ phone }}',
'{{ capabilities }}' /* required */,
'{{ capabilityOptions }}',
'{{ clientToken }}',
'{{ tags }}',
'{{ region }}'
RETURNING
name,
capabilities,
capabilityOptions,
createdAt,
email,
partnershipArn,
partnershipId,
phone,
profileId,
tradingPartnerId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: partnerships
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the partnerships resource.
    - name: profileId
      value: "{{ profileId }}"
      description: |
        Specifies the unique, system-generated identifier for the profile connected to this partnership.
    - name: name
      value: "{{ name }}"
      description: |
        Specifies a descriptive name for the partnership.
    - name: email
      value: "{{ email }}"
      description: |
        Specifies the email address associated with this trading partner.
    - name: phone
      value: "{{ phone }}"
      description: |
        Specifies the phone number associated with the partnership.
    - name: capabilities
      value:
        - "{{ capabilities }}"
      description: |
        Specifies a list of the capabilities associated with this partnership.
    - name: capabilityOptions
      description: |
        Specify the structure that contains the details for the associated capabilities.
      value:
        outboundEdi:
          x12:
            common:
              interchangeControlHeaders:
                senderIdQualifier: "{{ senderIdQualifier }}"
                senderId: "{{ senderId }}"
                receiverIdQualifier: "{{ receiverIdQualifier }}"
                receiverId: "{{ receiverId }}"
                repetitionSeparator: "{{ repetitionSeparator }}"
                acknowledgmentRequestedCode: "{{ acknowledgmentRequestedCode }}"
                usageIndicatorCode: "{{ usageIndicatorCode }}"
              functionalGroupHeaders:
                applicationSenderCode: "{{ applicationSenderCode }}"
                applicationReceiverCode: "{{ applicationReceiverCode }}"
                responsibleAgencyCode: "{{ responsibleAgencyCode }}"
              delimiters:
                componentSeparator: "{{ componentSeparator }}"
                dataElementSeparator: "{{ dataElementSeparator }}"
                segmentTerminator: "{{ segmentTerminator }}"
              validateEdi: {{ validateEdi }}
              controlNumbers:
                startingInterchangeControlNumber: {{ startingInterchangeControlNumber }}
                startingFunctionalGroupControlNumber: {{ startingFunctionalGroupControlNumber }}
                startingTransactionSetControlNumber: {{ startingTransactionSetControlNumber }}
              gs05TimeFormat: "{{ gs05TimeFormat }}"
            wrapOptions:
              wrapBy: "{{ wrapBy }}"
              lineTerminator: "{{ lineTerminator }}"
              lineLength: {{ lineLength }}
        inboundEdi:
          x12:
            acknowledgmentOptions:
              functionalAcknowledgment: "{{ functionalAcknowledgment }}"
              technicalAcknowledgment: "{{ technicalAcknowledgment }}"
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Reserved for future use.
    - name: tags
      description: |
        Specifies the key-value pairs assigned to ARNs that you can use to group and search for resources by type. You can attach this metadata to resources (capabilities, partnerships, and so on) for any purpose.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_partnership"
    values={[
        { label: 'update_partnership', value: 'update_partnership' }
    ]}
>
<TabItem value="update_partnership">

Updates some of the parameters for a partnership between a customer and trading partner. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.

```sql
UPDATE aws.b2bi.partnerships
SET 
partnershipId = '{{ partnershipId }}',
name = '{{ name }}',
capabilities = '{{ capabilities }}',
capabilityOptions = '{{ capabilityOptions }}'
WHERE 
region = '{{ region }}' --required
AND partnershipId = '{{ partnershipId }}' --required
RETURNING
name,
capabilities,
capabilityOptions,
createdAt,
email,
modifiedAt,
partnershipArn,
partnershipId,
phone,
profileId,
tradingPartnerId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_partnership"
    values={[
        { label: 'delete_partnership', value: 'delete_partnership' }
    ]}
>
<TabItem value="delete_partnership">

Deletes the specified partnership. A partnership represents the connection between you and your trading partner. It ties together a profile and one or more trading capabilities.

```sql
DELETE FROM aws.b2bi.partnerships
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
